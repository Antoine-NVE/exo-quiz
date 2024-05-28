const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    answer: { type: String, required: true },
    questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model('Answer', answerSchema);
