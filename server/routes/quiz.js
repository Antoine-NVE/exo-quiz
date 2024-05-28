const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz');

router.post('/', quizController.createQuiz);
router.get('/', quizController.readAllQuiz);
router.get('/:id', quizController.readOneQuiz);

module.exports = router;
