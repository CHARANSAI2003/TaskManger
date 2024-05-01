const Task = require('../models/taskModels');

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, assignedTo } = req.body;
    const task = new Task({
      title,
      description,
      due_date: dueDate,
      assigned_to: assignedTo,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    const { title, description, dueDate, status, assignedTo,createdAt } = req.body;
    task.title = title;
    task.description = description;
    task.due_date = dueDate;
    task.status = status;
    task.assigned_to = assignedTo;
    task.created_at = createdAt;
    task.updated_at = Date.now(); 
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.remove();
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};