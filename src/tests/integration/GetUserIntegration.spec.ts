import request from 'supertest';
import app from '../../infra/server/server';
import mongoose from 'mongoose';
import { UserModel } from '../../infra/database/MongooseUserModel';

describe('GET /users/:id', () => {
    let user: any;
    // let id: mongoose.Types.ObjectId;

    beforeAll(async () => {
        await mongoose.createConnection(process.env.MONGO_URL_TEST!);
    });
    
     beforeEach(async () => {
        await UserModel.deleteMany({});

        // id: new mongoose.Types.ObjectId(),
        const user = await request(app).post('/users').send({
            name: 'User',
            login:'testuser1',
            email: 'testuser@example.com',
            password: 'password123',
        });
        
        // await request(app).post('/users').send(user);
        // await UserModel.create()
        
    });
    
    afterAll(async () => {
        await UserModel.deleteMany({});
        await mongoose.connection.close();
    }); 
    
    it('deve buscar usuario pelo id com sucesso e retornar 200', async () => {
        // console.log(`${user._id}`);

        const response = await request(app).get(`/users/${user._id}`);

        // ${user._id}

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.name).toBe('User');
        expect(response.body.login).toBe('testuser1');
        expect(response.body.email).toBe('testuser@example.com');
    });


    // it('deve retornar 400 ao não encontrar usário pelo id', async () => {
    //     const res = await request(app).get(`/users/987`);

    //     expect(res.status).toBe(404);
    //     // expect(res.body.message).toMatch('Usuário não encontrado');
    // });

});
