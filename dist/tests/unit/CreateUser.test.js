"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUser_1 = require("../../core/usecases/CreateUser");
const User_1 = require("../../core/entities/User");
const InMemoryUserRepository_1 = require("../../infra/database/InMemoryUserRepository");
describe('CreateUser', () => {
    let userRepository;
    let createUser;
    //implementação de testes inMemory 
    beforeEach(() => {
        userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
        createUser = new CreateUser_1.CreateUser(userRepository);
    });
    it('deve criar um novo usuário e guardar no repositorio', async () => {
        const userData = new User_1.User('Kimberly', 'Kim09', 'kimberly@example.com', '123456');
        const user = await createUser.execute(userData);
        const saveUser = await userRepository.findByEmail(userData.email);
        expect(user).toBeInstanceOf(User_1.User);
        expect(user.name).toBe(userData.name);
        expect(user.login).toBe(userData.login);
        expect(user.email).toBe(userData.email);
        expect(saveUser).not.toBeNull();
    });
    it('não permite dois usuarios com o mesmo email', async () => {
        const userData = new User_1.User('Kimberly', 'Kim09', 'teste@example.com', '123456');
        const user = await createUser.execute(userData);
        await expect(createUser.execute({
            name: 'Teste 2',
            login: 'teste02',
            email: 'teste@example.com',
            password: '654321'
        })).rejects.toThrow('Usuário já existe com esse e-mail');
    });
    it('deve criptografar a senha do usuário', async () => {
        const userData = new User_1.User('Kimberly', 'Kim09', 'kimberly@example.com', '123456');
        const user = await createUser.execute(userData);
        expect(user.password).not.toBe(userData.password);
        expect(user.password).toMatch(/^\$2[ayb]\$.{56}$/);
    });
});
