"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUser_1 = require("../../core/usecases/CreateUser");
const User_1 = require("../../core/entities/User");
const repositoryInstance_1 = require("../../infra/database/repositoryInstance");
describe('CreateUser', () => {
    beforeEach(() => {
        repositoryInstance_1.userRepository.users = [];
    });
    it('deve criar um novo usuário e guardar no repositorio', async () => {
        const createUser = new CreateUser_1.CreateUser(repositoryInstance_1.userRepository);
        const user = await createUser.execute({
            name: 'Kimberly',
            login: 'Kim09',
            email: 'kimberly@example.com',
            password: '123456'
        });
        expect(user).toBeInstanceOf(User_1.User);
        expect(repositoryInstance_1.userRepository.users).toHaveLength(1);
    });
    it('não permite dois usuarios com o mesmo email', async () => {
        const createUser = new CreateUser_1.CreateUser(repositoryInstance_1.userRepository);
        const user = await createUser.execute({
            name: 'Teste',
            login: 'teste01',
            email: 'teste@example.com',
            password: '123456'
        });
        await expect(createUser.execute({
            name: 'Teste 2',
            login: 'teste02',
            email: 'teste@example.com',
            password: '654321'
        })).rejects.toThrow('Usuário já existe com esse e-mail');
        expect(repositoryInstance_1.userRepository.users).toHaveLength(1);
    });
});
