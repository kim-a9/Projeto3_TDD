import request from 'supertest';
import app from '../../infra/server/server';
import mongoose from 'mongoose';
import { UserModel } from '../../infra/database/MongooseUserModel';

describe('POST / users', () => {

    beforeAll(async () => {
        await mongoose.createConnection(process.env.MONGO_URL_TEST!);
    });


    beforeEach(async () => {
        await UserModel.deleteMany({});
    });

    afterAll(async () => {
    await UserModel.deleteMany({});
    await mongoose.connection.close();
    }); 
    it('deve criar um novo usuario', async () => {
    const response = await request(app).post('/users').send({
        name:'Dorothy Vaughan',
        login:'user01',
        email:'teste@example.com',
        password: '123456'
    });

    expect(response.status).toBe(200);

    });

    // it('deve retornar erro caso o email já estiver cadastrado', async () => {
        
    //     await request(app).post('/users').send({
    //         name: 'Usuario',
    //         login: 'user01',
    //         email: 'test@example.com',
    //         password: '123456'  
    //     });
        
    //     const res = await request(app).post('/users').send({
    //         name: 'Kim',
    //         login: 'kim09',
    //         email: 'test@example.com',
    //         password: '654321'
    //     });

    //     expect(res.status).toBe(400);
    //     expect(res.body).toHaveProperty('error', 'Usuário já existe com esse e-mail');
    // });


});