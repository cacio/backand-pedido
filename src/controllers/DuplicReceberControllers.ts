import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import DuplicReceber from '../models/DuplicReceber';
import DuplicReceber_view from '../Views/DuplicReceber_view';

export default{

    async Index(request: Request,response: Response){
        const duplicreceberRepository = getRepository(DuplicReceber);
        const duplicreceber = await duplicreceberRepository.find();

        return response.json(DuplicReceber_view.renderMany(duplicreceber));

    }

}