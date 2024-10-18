import dotenv from "dotenv";
dotenv.config();

const env = {
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
};
export default env;
