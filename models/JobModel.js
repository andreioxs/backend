const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  aboutCompany: {
    type: String,
    required: true
  },
  aboutJob: {
    type: String,
    required: true
  },
  qualifications: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Job', jobSchema)

