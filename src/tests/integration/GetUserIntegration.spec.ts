import request from 'supertest';
import app from '../../infra/server/server';

describe('GET /users/id:', () => {
    let userID: string;
    beforeAll(async () => {
        const { body } = await request(app).post(`/users`).send({
        name: 'Usuario',
        login: 'user01',
        email: 'teste@example.com',
        password: '123456'
        });
        userID = body.id
    });
    it('deve buscar usuario pelo id', async () => {
        const res = await request(app).get(`/users/${userID}`)

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id');
        
    });












})
