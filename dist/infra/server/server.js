"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = require("../../app/controllers/routes/UserRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/users', UserRoutes_1.userRoutes);
exports.default = app;
