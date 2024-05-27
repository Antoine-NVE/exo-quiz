const Quiz = require('../models/Quiz');

exports.createQuiz = (req, res) => {
    const quiz = new Quiz({
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        goodAnswer: req.body.goodAnswer,
    });

    quiz.save()
        .then(() => res.status(201).json({ message: 'Quiz créé' }))
        .catch((error) => res.status(400).json({ error }));
};

exports.readAllQuiz = (req, res) => {
    Quiz.find()
        .then((quiz) => res.status(200).json({ quiz: quiz }))
        .catch((error) => res.status(400).json({ error }));
};
