"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserById = void 0;
class GetUserById {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const userFound = await this.userRepository.findById(id);
        if (!userFound) {
            throw new Error('Usuário não encontrado');
        }
        return userFound;
    }
}
exports.GetUserById = GetUserById;
