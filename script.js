const questions = [  
    {  
        question: "CAPITAL OF FRANCE ?",  
        options: [  
            "BERLIN",  
            "Madrid",  
            "PARIS",  
            "ROME"  
        ],  
        answer: 2  
    },  
    {  
        question: "Which of the following is known as the Red Planet?",  
        options: [  
            "MARS",  
            "Earth",  
            "Venus",  
            "JUPiter"  
        ],  
        answer: 0  
    },  
    {  
        question: "Largest ocean on Earth?",  
        options: [  
            "Atlantic",  
            "Pacific",  
            "INDIAN",  
            "ARTIC"  
        ],  
        answer: 1  
    }  
];  

let currentQuestionIndex = 0;  
let score = 0;  

const questionText = document.getElementById("question-text");  
const optionsContainer = document.getElementById("options-container");  
const nextButton = document.getElementById("next-button");  
const prevButton = document.getElementById("prev-button");  
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
    
    
    prevButton.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";  
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? "inline-block" : "none";  
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";  
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

function handlePrevButton() {  
    if (currentQuestionIndex > 0) {  
        currentQuestionIndex--;  
        loadQuestion();  
    }  
}  

function displayScore() {  
    questionText.style.display = "none";  
    optionsContainer.style.display = "none";  
    nextButton.style.display = "none";  
    prevButton.style.display = "none";  
    submitButton.style.display = "none";  
    scoreContainer.style.display = "block";  
    finalScore.textContent = `${score} / ${questions.length}`;  
}  

function handleSubmit() {  
    alert("Thanks for taking the quiz!");  
    location.reload();  
}  

nextButton.addEventListener("click", handleNextButton);  
prevButton.addEventListener("click", handlePrevButton);  
submitButton.addEventListener("click", handleSubmit);  


loadQuestion();
