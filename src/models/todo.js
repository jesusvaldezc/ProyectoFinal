const mongoose = require('mongoose')
const validator = require('validator')

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  cash: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
