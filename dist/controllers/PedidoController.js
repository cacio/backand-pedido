"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async Index(request, response) {
    },
    async show(request, response) {
    },
    async create(request, response) {
    },
    async AsyncCreate(request, response) {
        const { created } = request.body;
        console.log(created);
        return response.status(201).json({ response: 'teste' });
    }
};
