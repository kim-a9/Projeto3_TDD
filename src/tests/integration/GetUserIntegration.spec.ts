import request from 'supertest';
import app from '../../infra/server/server';
import mongoose from 'mongoose';
import { UserModel } from '../../infra/database/MongooseUserModel';

describe('GET /users/:id', () => {
    let userId: mongoose.Types.ObjectId;
    let user: any;

    beforeAll(async () => {
        await mongoose.createConnection(process.env.MONGO_URL_TEST!);
    });
    
     beforeEach(async () => {
        await UserModel.deleteMany({});

       const user = await UserModel.create({
            name: 'User',
            login: 'testuser1',
            email: 'testuser@example.com',
            password: 'password123',
        });

        await request(app).post('/users').send(user);
        userId = user._id;
        
    });
    
    afterAll(async () => {
        await UserModel.deleteMany({});
        await mongoose.connection.close();
    }); 
    
    it('deve buscar usuario pelo id com sucesso e retornar 200', async () => {

        const res = await request(app).get(`/users/${userId}`);

        expect(res.status).toBe(200);
        expect(res.body.name).toBe('User');
        expect(res.body.login).toBe('testuser1');
        expect(res.body.email).toBe('testuser@example.com');
    });


    it('deve retornar 400 ao não encontrar usuário pelo id', async () => {
        const res = await request(app).get(`/users/987`);

        expect(res.status).toBe(404);
    });



});
