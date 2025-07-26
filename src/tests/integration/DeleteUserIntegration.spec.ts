// import request from 'supertest';
// import app from '../../infra/server/server';

// describe('DELETE /users/id:', () => {
//     let userID: string; 
//     beforeAll(async () => {
//         const { body } = await request(app).post(`/users`).send({
//         name: 'Usuario',
//         login: 'user01',
//         email: 'teste@example.com',
//         password: '123456'
//         });
//         userID = body.id;
//     });

//     it('deve deletar um usuario com sucesso', async () => {
//         const res = await request(app).delete(`/users/${userID}`);

//         expect(res.status).toBe(204);

//     });





// })