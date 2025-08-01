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



});