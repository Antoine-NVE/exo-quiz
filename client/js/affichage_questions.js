const container = document.getElementById('container');

try {
    const response = await fetch('http://localhost:3000/api/quiz/');
    const quiz = await response.json();

    for (let i = 0; i < quiz.length; i++) {
        container.innerHTML += `
            <div class="quizContainer">
                <h2>${quiz[i].question}</h2>
                <button id="${quiz[i].answers[0]._id}" class="answer" data-id="${quiz[i]._id}">${quiz[i].answers[0].answer}</button>
                <button id="${quiz[i].answers[1]._id}" class="answer" data-id="${quiz[i]._id}">${quiz[i].answers[1].answer}</button>
            </div>
        `;
    }

    // On récupère tous les boutons de réponse
    const answers = document.getElementsByClassName('answer');
    for (let i = 0; i < answers.length; i++) {
        // On récupère la réponse cliquée
        const answer = document.getElementById(answers[i].id);
        answer.addEventListener('click', async () => {
            if (answer.classList.contains('answer')) {
                try {
                    // On récupère la question concernée
                    const response = await fetch(`http://localhost:3000/api/quiz/${answer.dataset.id}`);
                    const question = await response.json();

                    // On récupère les 2 questions associées à la question
                    const questionAnswers = document.querySelectorAll(`[data-id='${answer.dataset.id}']`);
                    for (let j = 0; j < questionAnswers.length; j++) {
                        // On empêche de recliquer sur les 2 boutons
                        questionAnswers[j].classList.remove('answer');

                        if (answer.textContent === question.goodAnswer) {
                            // Dans le cas d'une bonne réponse
                            answer.style.background = 'green';
                        } else {
                            // Dans le cas d'une mauvaise réponse
                            if (questionAnswers[j].textContent === question.goodAnswer) {
                                // On met la bonne réponse en vert
                                questionAnswers[j].style.background = 'green';
                            } else {
                                // Et la mauvaise en rouge
                                questionAnswers[j].style.background = 'red';
                            }
                        }
                    }
                } catch (error) {
                    alert('Une erreur est survenue : ' + error);
                }
            }
        });
    }
} catch (error) {
    alert('Une erreur est survenue : ' + error);
}
