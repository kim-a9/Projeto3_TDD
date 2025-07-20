"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../core/entities/User");
const repositoryInstance_1 = require("../../infra/database/repositoryInstance");
const UpdateUser_1 = require("../../core/usecases/UpdateUser");
describe('UpdateUser', () => {
    let user;
    beforeEach(() => {
        repositoryInstance_1.userRepository.users = [];
        user = new User_1.User('1', 'Usuario', 'user01', 'teste@example.com', '123456');
        repositoryInstance_1.userRepository.users.push(user);
    });
    it('deve atualizar um usuário existente', async () => {
        const updateUser = new UpdateUser_1.UpdateUser(repositoryInstance_1.userRepository);
        const update = await updateUser.execute(user.id, { name: 'Kimberly Alves' });
        expect(update.name).toBe('Kimberly Alves');
    });
});
