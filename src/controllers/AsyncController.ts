import {Request,Response} from 'express';
import { getRepository,MoreThan } from 'typeorm';
import ClientesControllers from './ClientesControllers';
import CondicoesPagamentoController from './CondicoesPagamentoController';
import ProdutoControllers from './ProdutoControllers';
import  moment from 'moment';

export default{

    async asyncClientes(request: Request,response: Response){
        const { lastPulledVersion } = request.query;    

        let dataFormatted = "";
        //console.log(lastPulledVersion);
        if(lastPulledVersion != "null"){
          //console.log('entro aqui');
          const datalastpull = new Date(Number(lastPulledVersion));
         
          let formattedDate = (moment(datalastpull)).format('YYYY-MM-DD HH:mm:ss');
          
          dataFormatted = formattedDate;

        }else{
          console.log('entro aqui 2');
          const datalastpull = new Date();
          let formattedDate = (moment(datalastpull)).format('YYYY-MM-DD');
            //console.log(formattedDate);
           dataFormatted = formattedDate+' 00:00:00';
        }
        

        //console.log("data formatada: "+dataFormatted);
        /*Dados de Cliente*/
        const updated = await ClientesControllers.ListaClienteAlterado(String(dataFormatted));
        const created = await ClientesControllers.ListaClientesCriado(String(dataFormatted));
        

        const clientes = {
            created,
            updated,
            deleted: [],
          }

          /*Dados de Produto*/
          const updateProduto  = await ProdutoControllers.ListaProdutoAlterado(String(dataFormatted));
          const createdProduto = await ProdutoControllers.ListaProdutoCriado(String(dataFormatted));

          const produtos = {
            created:createdProduto,
            updated:updateProduto,
            deleted: [],
          }

          /*
            Dados de condiçoes de pagamento 
          */

          const updateCondicoespagamento = await CondicoesPagamentoController.ListaProdutoAlterado(String(dataFormatted));
          const createCondicoespagamento = await CondicoesPagamentoController.ListaCondicoesPagamentoCriado(String(dataFormatted));

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

    },



}