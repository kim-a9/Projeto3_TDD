"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserByController = void 0;
const repositoryInstance_1 = require("../../infra/database/repositoryInstance");
class UpdateUserByController {
    async handle(req, res) {
        const { id } = req.params;
        const { name, login, email, password } = req.body;
        try {
            const updateUser = await repositoryInstance_1.userRepository.updateUser({ id, name, login, email, password });
            return res.status(204)
                .json({ message: 'Usuário atualizado com sucesso',
                user: updateUser });
        }
        catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}
exports.UpdateUserByController = UpdateUserByController;
