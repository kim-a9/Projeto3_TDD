"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryUserRepository_1 = require("../../infra/database/InMemoryUserRepository");
const UpdateUser_1 = require("../../core/usecases/UpdateUser");
const CreateUser_1 = require("../../core/usecases/CreateUser");
describe('UpdateUser', () => {
    let userRepository;
    let createUser;
    let updateUser;
    beforeEach(() => {
        userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
        createUser = new CreateUser_1.CreateUser(userRepository);
        updateUser = new UpdateUser_1.UpdateUser(userRepository);
    });
    it('deve atualizar um usuário existente', async () => {
        const user = await createUser.execute({
            name: 'Kimberly',
            login: 'Kim09',
            email: 'kimberly@example.com',
            password: '123456'
        });
        const userFound = await userRepository.findById(user.id);
        const updatedUser = await updateUser.execute(user.id, {
            name: 'Usuario',
            login: 'usuario01',
            email: 'teste@example.com',
            password: '123456'
        });
        expect(updatedUser.name).toBe('Usuario');
        expect(updatedUser.login).toBe('usuario01');
        expect(updatedUser.email).toBe('teste@example.com');
        expect(updatedUser.password).toBe('123456');
    });
    it('deve retornar erro caso o usuario seja inexistente', async () => {
        await expect(updateUser.execute('987', {
            name: 'Usuario',
            login: 'usuario01',
            email: 'teste@example.com'
        })).rejects.toThrow('Não foi possível encontrar o usuário');
    });
});
