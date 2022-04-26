import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Pedido from '../models/Pedido';
//import usuarios_view from '../Views/usuarios_view';
import * as Yup from 'yup';

export default{

    async Index(request: Request,response: Response){

    },
    async show(request: Request,response: Response){

    },
    async create(request: Request,response: Response){

    },
    async AsyncCreate(request: Request,response: Response){
        const data = request.body;

        console.log(data);

        return response.status(201).json({response:'teste'});
    }
}