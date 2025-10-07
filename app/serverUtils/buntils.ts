export const mysql = new Bun.SQL(
  `mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3308/${process.env.DB_NAME}`,
);
