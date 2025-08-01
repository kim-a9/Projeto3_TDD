import request from 'supertest';
import app from '../../infra/server/server';
import mongoose from 'mongoose';
import { UserModel } from '../../infra/database/MongooseUserModel';


describe('PATCH /users/:id', () => {
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
    

    it('deve atualizar informações do usuario com sucesso', async () => {

        const res = await request(app).patch(`/users/${userId}`).send({ 
            name: "Maria" 
        });

        expect(res.status).toBe(204);
    
    });

    it('deve retornar erro se o id não for encontrado', async () => {
        const res = await request(app).patch(`/users/345`).send({
            name: 'Maria',
        });

        expect(res.status).toBe(404);
    });



});