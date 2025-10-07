// Database connection configuration
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || "3306";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "testpassword";
const DB_NAME = process.env.DB_NAME || "testDB";

const connectionString = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Create a function to get a fresh connection with error handling
export function getMysqlConnection() {
  try {
    return new Bun.SQL(connectionString);
  } catch (error) {
    console.error("Failed to create MySQL connection:", error);
    throw error;
  }
}

// Export a default connection for backwards compatibility
export const mysql = getMysqlConnection();
