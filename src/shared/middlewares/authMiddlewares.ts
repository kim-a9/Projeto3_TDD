import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default';

export function authenticateUser(req: Request, res: Response, next: NextFunction): void{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({message: 'Token não enviado'});
        return;
    }
 
    const token = authHeader.split(" ")[1];

    try{ 
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    }catch (error: any) {
        res.status(400).json({message: 'Token inválido'});
        return;
    }

}

