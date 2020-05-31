import * as dotenv from 'dotenv';
dotenv.config();

//get config from environment
const configs = {
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoURI: process.env.MONGO_URI,
};
export default configs
