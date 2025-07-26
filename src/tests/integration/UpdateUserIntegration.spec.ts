// import request from 'supertest';
// import app from '../../infra/server/server';

// describe('PATCH /users/:id', () => {
//     let userID: string;

//     beforeAll(async () => {
//         const { body } = await request(app).post(`/users`).send({
//         name: 'Usuario',
//         login: 'user01',
//         email: 'teste@example.com',
//         password: '123456'
//         });
//         userID = body.id
//     });

//     it('deve atualizar informações do usuario com sucesso', async () => {
//         const res = await request(app).patch(`/users/${userID}`).send({
//             name: 'Maria',
//         });

//         expect(res.status).toBe(200);
//     });

//     it('deve retornar erro se o id não for encontrado', async () => {
//         const res = await request(app).patch(`/users/`).send({
//             name: 'Maria',
//         });

//         expect(res.status).toBe(404);
//         expect(res.body.error).toBe('Não foi possível encontrar o usuário');
//     });







// });