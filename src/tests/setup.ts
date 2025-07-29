import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, ".env.test"),

});

export default {
    testTimeout: 10000,
    maxConcurrency: 1,
};