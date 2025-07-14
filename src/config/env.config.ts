import dotenv  from 'dotenv';
import { AppError } from '../errors/AppError';
dotenv.config();

interface EnvConfig {
    port: string;
    mongodb_url: string;
    node_env: string;
}

const envVariables = ["PORT", "MONGODB_URL", "NODE_ENV"];
envVariables.forEach((variable) => {
    if (!process.env[variable]) {
        throw new AppError (500,`Environment variable ${variable} is not defined`);
    }
})

export const env_config : EnvConfig={
    port : process.env.PORT || "5000",
    mongodb_url : process.env.MONGODB_URL as string,
    node_env : process.env.NODE_ENV || "development",
}