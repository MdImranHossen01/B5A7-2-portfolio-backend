import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export interface AuthRequest extends Request {
  user?: any;
}

const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      // THIS IS THE CRITICAL LINE
      const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as any;
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error('JWT Verification Error:', error); // ADDED DEBUG LOG
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export default auth;