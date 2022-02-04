"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientesControllers_1 = __importDefault(require("./ClientesControllers"));
const CondicoesPagamentoController_1 = __importDefault(require("./CondicoesPagamentoController"));
const ProdutoControllers_1 = __importDefault(require("./ProdutoControllers"));
exports.default = {
    async asyncClientes(request, response) {
        const { lastPulledVersion } = request.query;
        /*Dados de Cliente*/
        const updated = await ClientesControllers_1.default.ListaClienteAlterado(Number(lastPulledVersion));
        const created = await ClientesControllers_1.default.ListaClientesCriado(Number(lastPulledVersion));
        const clientes = {
            created,
            updated,
            deleted: [],
        };
        /*Dados de Produto*/
        const updateProduto = await ProdutoControllers_1.default.ListaProdutoAlterado(Number(lastPulledVersion));
        const createdProduto = await ProdutoControllers_1.default.ListaProdutoCriado(Number(lastPulledVersion));
        const produtos = {
            created: createdProduto,
            updated: updateProduto,
            deleted: [],
        };
        /*
          Dados de condiçoes de pagamento
        */
        const updateCondicoespagamento = await CondicoesPagamentoController_1.default.ListaProdutoAlterado(Number(lastPulledVersion));
        const createCondicoespagamento = await CondicoesPagamentoController_1.default.ListaCondicoesPagamentoCriado(Number(lastPulledVersion));
        const condicoes_pagamento = {
            created: createCondicoespagamento,
            updated: updateCondicoespagamento,
            deleted: [],
        };
        return response.status(200).json({
            latestVersion: new Date().getTime(),
            changes: {
                clientes,
                produtos,
                condicoes_pagamento
            }
        });
    }
};
