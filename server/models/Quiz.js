const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    question: { type: String, required: true },
    answer1: { type: String, required: true },
    answer2: { type: String, required: true },
    goodAnswer: { type: Number, required: true, min: 1, max: 2 },
});

module.exports = mongoose.model('Quiz', quizSchema);
