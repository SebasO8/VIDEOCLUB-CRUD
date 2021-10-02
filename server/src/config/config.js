import dotenv from 'dotenv';
dotenv.config();

export const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_DATABASE || 'movies',
}