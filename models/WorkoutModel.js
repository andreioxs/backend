const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: Number,
    required: true
  },
  answers: [String],
  author: {
    type: String,
    ref: 'user'
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', questionSchema)