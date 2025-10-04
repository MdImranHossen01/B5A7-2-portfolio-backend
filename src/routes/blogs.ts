import express from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';
import auth from '../middleware/auth';

const router = express.Router();

router.route('/').get(getBlogs).post(auth, createBlog);
router.route('/:slug').get(getBlogBySlug);
router.route('/:id').put(auth, updateBlog).delete(auth, deleteBlog);

export default router;