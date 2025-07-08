"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const crypto_1 = require("crypto");
const User_1 = require("../entities/User");
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const existing = await this.userRepository.findByEmail(data.email);
        if (existing) {
            throw new Error('Usuário já existe com esse e-mail');
        }
        const user = new User_1.User((0, crypto_1.randomUUID)(), data.name, data.login, data.email, data.password);
        await this.userRepository.save(user);
        return user;
    }
}
exports.CreateUser = CreateUser;
