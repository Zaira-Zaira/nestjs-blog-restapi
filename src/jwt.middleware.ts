import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, request, Request, Response } from 'express';


@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorisation: token } = req.headers;
    console.log('Request...');
    next();
  }
}
