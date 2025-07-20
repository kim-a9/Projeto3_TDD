import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default';

export function authenticateUser(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if(!authHeader || authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Token não enviado'});
    }

    const token = authHeader.replace('Bearer ', ' ');

    try{ 
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    }catch (error: any) {
        return res.status(400).json({message: 'Token inválido'});
    }

}

