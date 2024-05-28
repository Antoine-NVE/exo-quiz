const Question = require('../models/Question');
const Answer = require('../models/Answer');

exports.createQuiz = (req, res) => {
    const question = new Question({
        question: req.body.question,
        goodAnswer: req.body.answers[req.body.goodAnswer - 1],
    });

    question
        .save()
        .then((quiz) => {
            const answer1 = new Answer({
                answer: req.body.answers[0],
                questionId: quiz._id,
            });
            const answer2 = new Answer({
                answer: req.body.answers[1],
                questionId: quiz._id,
            });

            return Promise.all([answer1.save(), answer2.save()]);
        })
        .then(() => res.status(201).json({ message: 'Quiz créé' }))
        .catch((error) => res.status(400).json({ error }));
};

exports.readAllQuiz = (req, res) => {
    Question.find()
        .then((quiz) => res.status(200).json({ quiz: quiz }))
        .catch((error) => res.status(400).json({ error }));
};
