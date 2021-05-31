import dotenv from 'dotenv';

dotenv.config();

interface Environment {
    port: number | string;
    mongodb_uri: string;
}

const environment: Environment = {
    port: process.env.PORT || 8080,
    mongodb_uri: process.env.MONGODB_URI || '',
};

export default environment;