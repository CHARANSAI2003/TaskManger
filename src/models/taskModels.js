const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  due_date: {
    type: Date,
  },
  status: {
    type: String,
    default: 'pending',
  },
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created_at: { 
    type: Date,
    default: Date.now 
  },
  updated_at: { 
    type: Date, 
    default: Date.now
   }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;