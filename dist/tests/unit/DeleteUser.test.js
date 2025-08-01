"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../core/entities/User");
const InMemoryUserRepository_1 = require("../../infra/database/InMemoryUserRepository");
const DeleteUser_1 = require("../../core/usecases/DeleteUser");
describe('DeleteUser', () => {
    let userRepository;
    let deleteUser;
    beforeEach(() => {
        userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
        deleteUser = new DeleteUser_1.DeleteUser(userRepository);
    });
    it('deve apagar um usuario com sucesso', async () => {
        const user = new User_1.User('123', 'Usuario', 'usuario01', 'teste@example.com', '123456');
        await userRepository.save(user);
        await deleteUser.execute(user.id);
        const delUser = await userRepository.findById(user.id);
        expect(delUser).toBeNull();
    });
    it('deve retornar erro caso o usuario seja inexistente', async () => {
        const user = new User_1.User('123', 'Usuario', 'usuario01', 'teste@example.com', '123456');
        await userRepository.save(user);
        await expect(deleteUser.execute('987')).rejects.toThrow('usuário não encontrado');
    });
});
