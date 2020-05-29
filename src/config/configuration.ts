import * as dotenv from 'dotenv';
dotenv.config();

//get config from environment
const configs = {
  port: parseInt(process.env.PORT, 10) || 3000,
};
export default configs
