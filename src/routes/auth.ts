import express from 'express';
import { authUser, registerUser, getUserProfile } from '../controllers/authController';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.get('/profile', auth, getUserProfile);

export default router;