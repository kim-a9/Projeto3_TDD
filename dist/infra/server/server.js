"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = require("../../app/routes/UserRoutes");
const mongoConnection_1 = require("../../infra/database/mongoConnection");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const url = process.env.MONGO_URL;
app.use('/users', UserRoutes_1.userRoutes);
(0, mongoConnection_1.connectToMongo)();
exports.default = app;
