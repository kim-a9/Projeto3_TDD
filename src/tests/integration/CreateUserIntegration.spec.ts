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
        await request(app).post('/users').send({
            name: 'Usuario',
            login: 'user01',
            email: 'teste@example.com',
            password: '123456'
        });

        const res = await request(app).post('/users').send({
            name: 'Kim',
            login: 'kim09',
            email: 'teste@example.com',
            password: '654321'
        });

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', 'Usuário já existe com esse e-mail');
    });










});