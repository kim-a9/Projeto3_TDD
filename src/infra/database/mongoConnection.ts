import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('Conexão ao MongoDB estabelecida com sucesso');
    } catch (e) {
        console.error('Falha na conexão com o MongoDB', e);
        process.exit(1);
    }

}