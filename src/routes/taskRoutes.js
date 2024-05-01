const express = require('express');
const router = express.Router();
const taskController = require('../accesscontroller/taskControllers');
const authMiddleware = require('../middleware/authMiddleware');

// Task routes
router.post('/', authMiddleware, taskController.createTask);
router.get('/', authMiddleware, taskController.getTasks);
router.get('/:id', authMiddleware, taskController.getTaskById);
router.put('/:id', authMiddleware, taskController.updateTask);
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;