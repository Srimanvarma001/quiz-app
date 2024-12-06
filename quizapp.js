    let currentQuestionIndex = 0;
    let correctAnswerCount = 0;

    const quizcontainer = document.getElementById("quiz-container");
    const nextButton = document.getElementById("next-button");
    const resultcontainer = document.getElementById("result-container");

    function renderquestion() {
        quizcontainer.innerHTML = "";
        const item = quizData[currentQuestionIndex];
        const questionElement = document.createElement("h2");
        questionElement.textContent = `Q${currentQuestionIndex + 1}: ${item.question}`;
        quizcontainer.appendChild(questionElement);

        const options = [item.a, item.b, item.c, item.d];
        for (let i = 0; i < options.length; i++) {
            const optionButton = document.createElement("button");
            optionButton.textContent = options[i];
            optionButton.addEventListener("click", function () {
                if (options[i] === item[item.correct]) {
                    correctAnswerCount++;
                }
                showNextButton();
            });
            quizcontainer.appendChild(optionButton);
        }
    }

    function showNextButton() {
        nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            nextButton.style.display = "none";
            renderquestion();
        } else {
            displayResults();
        }
    });

    function displayResults() {
        quizcontainer.style.display = "none";
        nextButton.style.display = "none";
        resultcontainer.style.display = "block";
        resultcontainer.innerHTML = ""; // Clear previous results

        const resultMessage = document.createElement("h2");
        resultMessage.textContent = `You Got ${correctAnswerCount} Out of ${quizData.length} Answers!`;
        resultcontainer.appendChild(resultMessage);

        const reloadButton = document.createElement("button");
        reloadButton.textContent = "Retake Quiz";
        reloadButton.addEventListener("click", function () {
            window.location.reload();
        });
        resultcontainer.appendChild(reloadButton);
    }

    renderquestion();