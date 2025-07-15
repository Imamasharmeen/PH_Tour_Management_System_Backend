import dotenv  from 'dotenv';

dotenv.config();
export const env_config={
    port : process.env.PORT || 5000,
    mongodb_url : process.env.MONGODB_URL as string,
    node_env : process.env.NODE_ENV || "development",
}