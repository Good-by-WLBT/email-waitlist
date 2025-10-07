import { SQL } from "bun";

const mysql = new SQL("mysql://root:testpassword@localhost:3306/testDB");

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

process.exit();
