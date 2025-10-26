import { SQL } from "bun";

// Use environment variables for database connection
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || "3306";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "testpassword";
const DB_NAME = process.env.DB_NAME || "testDB";

const connectionString = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

console.log("Connecting to database...");
console.log(`Host: ${DB_HOST}, Port: ${DB_PORT}, Database: ${DB_NAME}`);

// Retry logic for database connection
async function connectWithRetry(maxRetries = 10, delayMs = 2000): Promise<SQL> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const mysql = new SQL(connectionString);
      return mysql;
    } catch (error) {
      console.log(`Database connection attempt ${i + 1} failed:`, error);
      if (i === maxRetries - 1) {
        throw error;
      }
      console.log(`Retrying in ${delayMs}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
  throw new Error("Failed to connect to database after all retries");
}

const mysql = await connectWithRetry();

console.log("Connected to database. Running migrations...");

await mysql`DROP TABLE IF EXISTS users`;
await mysql`DROP TABLE IF EXISTS verified_users`;
await mysql`DROP TABLE IF EXISTS verification_hashes`;
await mysql`
  create table \`users\` (
    \`id\` int unsigned not null auto_increment primary key,
    \`full_name\` varchar(255) not null,
    \`job_description\` varchar(255) null,
    \`current_email_provider\` varchar(255) not null,
    \`reserved_prefix\` varchar(255) not null,
    \`current_email\` varchar(255) not null,
    \`submitted_at\` DATETIME null default NOW()
  )
  `;

await mysql`
  create table \`verified_users\` (
    \`id\` int unsigned not null auto_increment primary key,
    \`verified_user_id\` INT not null
  )
  `;

await mysql`
  create table \`verification_hashes\` (
    \`id\` int unsigned not null auto_increment primary key,
    \`hash\` TEXT not null,
    \`user_id\` INT not null
  )
  `;

console.log("Database migration completed successfully!");

process.exit();
