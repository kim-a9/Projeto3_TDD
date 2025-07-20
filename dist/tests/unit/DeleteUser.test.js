"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../core/entities/User");
const repositoryInstance_1 = require("../../infra/database/repositoryInstance");
const DeleteUser_1 = require("../../core/usecases/DeleteUser");
describe('DeleteUser', () => {
    let user;
    beforeEach(() => {
        repositoryInstance_1.userRepository.users = [];
        user = new User_1.User('1', 'Usuario', 'user01', 'teste@example.com', '123456');
        repositoryInstance_1.userRepository.users.push(user);
    });
    it('deve apagar um usuario com sucesso', async () => {
        const deleteUser = new DeleteUser_1.DeleteUser(repositoryInstance_1.userRepository);
        await expect(deleteUser.execute(user.id));
        const deletedUser = await repositoryInstance_1.userRepository.findById(user.id);
        expect(deletedUser).toBeNull();
    });
});
