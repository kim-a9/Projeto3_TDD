"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../core/entities/User");
const repositoryInstance_1 = require("../../infra/database/repositoryInstance");
const GetUserById_1 = require("../../core/usecases/GetUserById");
describe('GetUserById', () => {
    let user;
    beforeEach(() => {
        repositoryInstance_1.userRepository.users = [];
        user = new User_1.User('1', 'Usuario', 'user01', 'teste@example.com', '123456');
        repositoryInstance_1.userRepository.users.push(user);
    });
    it('deve verificar se o usuario possui um id', async () => {
        const getUser = new GetUserById_1.GetUserById(repositoryInstance_1.userRepository);
        const userFound = await getUser.execute(user.id);
        expect(userFound).toHaveProperty('id');
    });
});
