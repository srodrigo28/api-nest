import { ArgumentsHost, Catch, ExceptionFilter, HttpException, InternalServerErrorException } from '@nestjs/common';
import {Request, Response } from 'express';

Catch(HttpException);
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();

        if(exception instanceof InternalServerErrorException){
            response.status(500).send({
                statusCode: 500,
                message: 'Erro interno no servidor Offline, Suporte(62) 98592-1140',
                error: exception.name
            });
            
        }

        response.status(exception.getStatus()).send(exception);
    }


}