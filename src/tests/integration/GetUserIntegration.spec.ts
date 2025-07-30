import request from 'supertest';
import app from '../../infra/server/server';
import mongoose from 'mongoose';
import { UserModel } from '../../infra/database/MongooseUserModel';

describe('GET /users/id:', () => {

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


    // it('deve buscar usuario pelo id', async () => {
    //     const res = await request(app).get(`/users/${userID}`)

    //     expect(res.status).toBe(200);
    //     expect(res.body).toHaveProperty('id');
        
    // });

});
