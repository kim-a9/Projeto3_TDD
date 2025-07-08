"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const InMemoryUserRepository_1 = require("../database/InMemoryUserRepository");
exports.userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
