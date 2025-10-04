import { Response } from 'express';
import Project from '../models/Project';
import { AuthRequest } from '../middleware/auth';

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req: AuthRequest, res: Response) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single project by ID
// @route   GET /api/projects/:id
// @access  Public
export const getProjectById = async (req: AuthRequest, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
export const createProject = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, image, githubUrl, liveUrl, technologies, featured } = req.body;

    const project = new Project({
      title,
      description,
      image,
      githubUrl,
      liveUrl,
      technologies,
      featured,
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
export const updateProject = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, image, githubUrl, liveUrl, technologies, featured } = req.body;

    const project = await Project.findById(req.params.id);

    if (project) {
      project.title = title;
      project.description = description;
      project.image = image;
      project.githubUrl = githubUrl;
      project.liveUrl = liveUrl;
      project.technologies = technologies;
      project.featured = featured;
      project.updatedAt = new Date();

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
export const deleteProject = async (req: AuthRequest, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      await project.deleteOne();
      res.json({ message: 'Project removed' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};