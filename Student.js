const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  department: String,
  year: Number,
  marks: Number
});

module.exports = mongoose.model('Student', studentSchema);
