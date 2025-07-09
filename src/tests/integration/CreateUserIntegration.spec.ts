import request from 'supertest';
import app from '../../infra/server/server';

describe('POST / users', () => {
    it('deve criar um novo usuario', async () => {
    const response = await request(app).post('/users').send({
        name: 'Usuario',
        login: 'user01',
        email: 'teste@example.com',
        password: '123456'
    });

    expect(response.status).toBe(201);
    });

    it('deve retornar erro caso o email já estiver cadastrado', async () => {
        
    })










});