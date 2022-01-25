import {Request,Response} from 'express';
import { getRepository,MoreThan } from 'typeorm';
import ClientesControllers from './ClientesControllers';
import CondicoesPagamentoController from './CondicoesPagamentoController';
import ProdutoControllers from './ProdutoControllers';

export default{

    async asyncClientes(request: Request,response: Response){
        const { lastPulledVersion } = request.query;        
       
        /*Dados de Cliente*/
        const updated = await ClientesControllers.ListaClienteAlterado(Number(lastPulledVersion));
        const created = await ClientesControllers.ListaClientesCriado(Number(lastPulledVersion));
        

        const clientes = {
            created,
            updated,
            deleted: [],
          }

          /*Dados de Produto*/
          const updateProduto  = await ProdutoControllers.ListaProdutoAlterado(Number(lastPulledVersion));
          const createdProduto = await ProdutoControllers.ListaProdutoCriado(Number(lastPulledVersion));

          const produtos = {
            created:createdProduto,
            updated:updateProduto,
            deleted: [],
          }

          /*
            Dados de condiçoes de pagamento 
          */

          const updateCondicoespagamento = await CondicoesPagamentoController.ListaProdutoAlterado(Number(lastPulledVersion));
          const createCondicoespagamento = await CondicoesPagamentoController.ListaCondicoesPagamentoCriado(Number(lastPulledVersion));

          const condicoes_pagamento = {
            created:createCondicoespagamento,
            updated:updateCondicoespagamento,
            deleted: [],
          }

          return response.status(200).json({
            latestVersion: new Date().getTime(),
            changes: {
                clientes,
                produtos,
                condicoes_pagamento
            }
          });

    }

}