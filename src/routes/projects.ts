import express from 'express';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController';
import auth from '../middleware/auth';

const router = express.Router();

router.route('/').get(getProjects).post(auth, createProject);
router.route('/:id').get(getProjectById).put(auth, updateProject).delete(auth, deleteProject);

export default router;