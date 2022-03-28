import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import DuplicReceber from '../models/DuplicReceber';
import DuplicReceber_view from '../Views/DuplicReceber_view';

export default{

    async Index(request: Request,response: Response){
        const duplicreceberRepository = getRepository(DuplicReceber);
        const duplicreceber = await duplicreceberRepository.find();

        return response.json(DuplicReceber_view.renderMany(duplicreceber));

    },
    async show(request: Request,response: Response){

    },
    async create(request: Request,response: Response){
        const {codigo,ndup,vlrdup,vencdup,cod_cli,forma_pagamento,cnpj_emp} = request.body;

        const data = {
            codigo,
            ndup,
            vlrdup,
            vencdup,
            cod_cli,
            forma_pagamento,
            cnpj_emp
        }

        const duplicreceberRepository = getRepository(DuplicReceber);

        const duplicrecebers = duplicreceberRepository.create(data);

        await duplicreceberRepository.save(duplicrecebers);

        return response.status(201).json(duplicrecebers);
    }

}