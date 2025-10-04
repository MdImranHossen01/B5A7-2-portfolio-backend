import express from 'express';
import { getUsers, createAdminUser } from '../controllers/userController';
import auth from '../middleware/auth';

const router = express.Router();

router.route('/').get(auth, getUsers);
router.route('/create-admin').post(createAdminUser);

export default router;