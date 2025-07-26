"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserRepository = void 0;
class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    async save(user) {
        this.users.push(user);
        return user;
    }
    async findByEmail(email) {
        const user = this.users.find((u) => u.email === email);
        return user || null;
    }
    async findById(id) {
        const user = this.users.find((u) => u.id === id);
        return user || null;
    }
    async update(user) {
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }
    async delete(id) {
        this.users = this.users.filter((user) => user.id !== id);
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
