const question = document.getElementById('question');
const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const goodAnswer = document.getElementById('good-answer');

const questionError = document.getElementById('question-error');
const answer1Error = document.getElementById('answer-1-error');
const answer2Error = document.getElementById('answer-2-error');
const goodAnswerError = document.getElementById('good-answer-error');

const submitButton = document.getElementById('submit-button');

let isSubmitted = false;
let hasErrors = false;

const verifyQuestion = (value) => {
    if (value.length === 0) {
        hasErrors = true;
        return 'Veuillez saisir une question';
    }

    if (value.length < 5) {
        hasErrors = true;
        return '5 caractères minimum';
    }

    if (value.length > 100) {
        hasErrors = true;
        return '100 caractères maximum';
    }

    return '';
};

const verifyAnswer = (value) => {
    if (value.length === 0) {
        hasErrors = true;
        return 'Veuillez saisir une réponse';
    }

    if (value.length > 100) {
        hasErrors = true;
        return '100 caractères maximum';
    }

    return '';
};

const verifyGoodAnswer = (value) => {
    // On convertit en number
    value = +value;

    if (value !== 1 && value !== 2) {
        hasErrors = true;
        return 'La valeur ne peut être autre chose que "1" ou "2"';
    }

    return '';
};

question.addEventListener('input', () => {
    if (isSubmitted) {
        questionError.innerHTML = verifyQuestion(question.value);
    }
});

answer1.addEventListener('input', () => {
    if (isSubmitted) {
        answer1Error.innerHTML = verifyAnswer(answer1.value);
    }
});

answer2.addEventListener('input', () => {
    if (isSubmitted) {
        answer2Error.innerHTML = verifyAnswer(answer2.value);
    }
});

goodAnswer.addEventListener('input', () => {
    if (goodAnswer.value < 1) {
        goodAnswer.value = 1;
    }

    if (goodAnswer.value > 2) {
        goodAnswer.value = 2;
    }

    if (isSubmitted) {
        goodAnswerError.innerHTML = verifyGoodAnswer(goodAnswer.value);
    }
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    isSubmitted = true;
    hasErrors = false;

    questionError.innerHTML = verifyQuestion(question.value);
    answer1Error.innerHTML = verifyAnswer(answer1.value);
    answer2Error.innerHTML = verifyAnswer(answer2.value);
    goodAnswerError.innerHTML = verifyGoodAnswer(goodAnswer.value);

    if (!hasErrors) {
        console.log('coucou');
    }
});
