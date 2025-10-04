import { Response } from 'express';
import Blog from '../models/Blog';
import { AuthRequest } from '../middleware/auth';

// @desc    Fetch all blogs
// @route   GET /api/blogs
// @access  Public
export const getBlogs = async (req: AuthRequest, res: Response) => {
  try {
    const blogs = await Blog.find({}).sort({ publishedAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single blog by slug
// @route   GET /api/blogs/:slug
// @access  Public
export const getBlogBySlug = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private/Admin
export const createBlog = async (req: AuthRequest, res: Response) => {
  try {
    const { title, content, excerpt, slug, tags } = req.body;

    const blog = new Blog({
      title,
      content,
      excerpt,
      slug,
      tags,
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
export const updateBlog = async (req: AuthRequest, res: Response) => {
  try {
    const { title, content, excerpt, slug, tags } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (blog) {
      blog.title = title;
      blog.content = content;
      blog.excerpt = excerpt;
      blog.slug = slug;
      blog.tags = tags;
      blog.updatedAt = new Date();

      const updatedBlog = await blog.save();
      res.json(updatedBlog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
export const deleteBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
      await blog.deleteOne();
      res.json({ message: 'Blog removed' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};