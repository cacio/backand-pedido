"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const DuplicReceber_1 = __importDefault(require("../models/DuplicReceber"));
const DuplicReceber_view_1 = __importDefault(require("../Views/DuplicReceber_view"));
exports.default = {
    async Index(request, response) {
        const duplicreceberRepository = (0, typeorm_1.getRepository)(DuplicReceber_1.default);
        const duplicreceber = await duplicreceberRepository.find();
        return response.json(DuplicReceber_view_1.default.renderMany(duplicreceber));
    }
};
