"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../core/entities/User");
const InMemoryUserRepository_1 = require("../../infra/database/InMemoryUserRepository");
const GetUserById_1 = require("../../core/usecases/GetUserById");
const CreateUser_1 = require("../../core/usecases/CreateUser");
describe('GetUserById', () => {
    let userRepository;
    let getUserById;
    let createUser;
    beforeEach(() => {
        userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
        getUserById = new GetUserById_1.GetUserById(userRepository);
        createUser = new CreateUser_1.CreateUser(userRepository);
    });
    it('deve verificar se o usuario possui um id', async () => {
        const userData = new User_1.User('Kimberly', 'Kim09', 'kimberly@example.com', '123456');
        const user = await createUser.execute(userData);
        const idFound = await getUserById.execute(user.id);
        expect(idFound).not.toBeNull();
    });
    it('deve retornar um erro caso não encontre o id', async () => {
        await expect(getUserById.execute('9876')).rejects.toThrow('Usuário não encontrado');
    });
});
