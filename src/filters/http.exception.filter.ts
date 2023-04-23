import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        // response object
        // {
        //     "status": "Bad Request",
        //     "message": "title cannot be null",
        //     "data": {}
        // }

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const exceptionResponse = exception.getResponse() as any;
        const message = exceptionResponse.message;
        const status = exception.getStatus();

        console.log(exceptionResponse);

        response
            .status(status)
            .json({
                status: exceptionResponse.error || 'error',
                message,
            });

    }
}