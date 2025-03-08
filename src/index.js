import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: './env' });

connectDB()
  .then(() => console.log("MONGODB CONNECTED SUCCESSFULLY"))
  .catch((error) => console.log("MONGODB CONNECTION FAILED !!!", error));
