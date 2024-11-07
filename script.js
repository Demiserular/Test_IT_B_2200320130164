const questions = [  
    {  
        question: "CAPITAL OF FRANCE ?",  
        options: [  
            "BERLIN",  
            "Madrid",  
            "PARIS",  
            "ROME"  
        ],  
        answer: 0  
    },  
    {  
        question: "Which of the followinhg KNown as red planet ?",  
        options: [  
            "MARS",  
            "Earth",  
            "Venus",  
            "JUPiter"  
        ],  
        answer: 2  
    },  
    {  
        question: "LARgest ocean In Earth??",  
        options: [  
            "Atlantic",  
            "Pacific",  
            "INDIAN",  
            "ARTIC"  
        ],  
        answer: 1  
    },  
];  

let currentQuestionIndex = 0;  
let score = 0;  

const questionText = document.getElementById("question-text");  
const optionsContainer = document.getElementById("options-container");  
const nextButton = document.getElementById("next-button");  
const submitButton = document.getElementById("submit-button");  
const scoreContainer = document.getElementById("score-container");  
const finalScore = document.getElementById("final-score");  

function loadQuestion() {  
    const currentQuestion = questions[currentQuestionIndex];  
    questionText.textContent = currentQuestion.question;  
    optionsContainer.innerHTML = "";   

    currentQuestion.options.forEach((option, index) => {  
        const label = document.createElement("label");  
        label.innerHTML = `  
            <input type="radio" name="option" value="${index}" /> ${option}  
        `;  
        optionsContainer.appendChild(label);  
    });  
}  

function handleNextButton() {  
    const selectedOption = document.querySelector('input[name="option"]:checked');  
    if (selectedOption) {  
        if (parseInt(selectedOption.value) === questions[currentQuestionIndex].answer) {  
            score++;  
        }  
        currentQuestionIndex++;  
        if (currentQuestionIndex < questions.length) {  
            loadQuestion();  
        } else {  
            displayScore();  
        }  
    } else {  
        alert("Please select an answer!");  
    }  
}  

function displayScore() {  
    questionText.style.display = "none";  
    optionsContainer.style.display = "none";  
    nextButton.style.display = "none";  
    submitButton.style.display = "block";  
    scoreContainer.style.display = "block";  
    finalScore.textContent = `${score} / ${questions.length}`;  
}  

function handleSubmit() {  
    alert("Thanks for taking the quiz!");  
    location.reload(); // Reload the page for a new attempt  
}  

nextButton.addEventListener("click", handleNextButton);  
submitButton.addEventListener("click", handleSubmit);  

// Load the first question  
loadQuestion();