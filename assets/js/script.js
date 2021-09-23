var startButton = document.getElementById("start-button");
var mainPage = document.getElementById("main-page");
var quiz = document.getElementById("quiz");
var results = document.getElementById("results");
var highscores = document.getElementById("highscores");
var question = document.getElementById("question");
var button0 = document.getElementById("choice0");
var button1 = document.getElementById("choice1");
var button2 = document.getElementById("choice2");
var button3 = document.getElementById("choice3");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var counter = 0;
var timeEl = document.querySelector("#timer");
var secondsLeft = 76;
var timerInterval;

var quizQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		answers: {
			a: '1. strings',
			b: '2. booleans',
			c: '3. alerts',
            d: '4. numbers'
		},
		correctAnswer: '3. alerts'
	},
	{
		question: "The condition in an if/else statement is enclosed within _____.",
		answers: {
			a: '1. quotes',
			b: '2. curly brackets',
			c: '3. parentheses',
            d: '4. square brackets'
		},
		correctAnswer: '3. parentheses'
	},
    {
		question: "Arrays in JavaScript can be used to store _____.",
		answers: {
			a: '1. numbers and strings',
			b: '2. other arrays',
			c: '3. booleans',
            d: '4. all of the above'
		},
		correctAnswer: '4. all of the above'
	},
    {
		question: "String values must be enclosed within ______ when being assigned to variables.",
		answers: {
			a: '1. commas',
			b: '2. curly brackets',
			c: '3. quotes',
            d: '4. parentheses'
		},
		correctAnswer: '3. quotes'
	},
    {
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answers: {
			a: '1. JavaScript',
			b: '2. terminal/bash',
			c: '3. for loops',
            d: '4. console.log'
		},
		correctAnswer: '4. console.log'
	}
];



function startClick () {
    setTime();
    //Hide main page and show quiz
    mainPage.className = "hidden";
    quiz.className = "";
}
    
startButton.addEventListener("click", startClick);

//Start timer, and set an if statement to end the game if the timer runs out
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
        //Call function to score quiz
        scoreQuiz();
        }

    }, 1000);
}

function generateQuestions() {
    question.textContent = quizQuestions[counter].question;
    button0.textContent = quizQuestions[counter].answers.a;
    button1.textContent = quizQuestions[counter].answers.b;
    button2.textContent = quizQuestions[counter].answers.c;
    button3.textContent = quizQuestions[counter].answers.d;

    button0.onclick = nextQuestion;
    button1.onclick = nextQuestion;
    button2.onclick = nextQuestion;
    button3.onclick = nextQuestion;

    button0.setAttribute("value", quizQuestions[counter].answers.a);
    button1.setAttribute("value", quizQuestions[counter].answers.b);
    button2.setAttribute("value", quizQuestions[counter].answers.c);
    button3.setAttribute("value", quizQuestions[counter].answers.d);

}

generateQuestions();

var quizButtons = document.getElementsByClassName("quizButtons");

// for (i=0; i< quizButtons.length; i++) {
//     var selectedAnswer = quizButtons[i].addEventListener("click", nextQuestion);
// }

//If correct, show correct response, and move to next screen.
//If wrong, subtract ten seconds from clock, show wrong response, and move to next screen. 
function nextQuestion() {
    //if the value matches the correct answer choice for this question...
    if ( this.value === quizQuestions[counter].correctAnswer) {
        //have correct show up for one second
        correct.className = "";
        setTimeout(function(){
            //hide it again
            correct.className = "response"
        }, 1000)
    } else {
        //have wrong show up for one second
        wrong.className = "";
        setTimeout(function(){
            //hide it again
            wrong.className = "response"
        }, 1000)
        //take 10 seconds off the clock
        secondsLeft -= 10;
    }
    //increment by one no matter what, to cycle through the questions
    counter++;
    //if out of questions, scorequiz after a timeout
    if (counter === quizQuestions.length) {
        //timeout allows a second for the last question to show a response before showing final score
        setTimeout(scoreQuiz, 1000);
    } else {
        //generate a new question
        generateQuestions();
    }
}
    

function scoreQuiz() {
    //score is the time left on the clock
    var score = secondsLeft;
    var finalScore = document.getElementById("finalScore");
    finalScore.innerHTML = "Your final score is " + score + "."
    // Stops execution of action, hides the quiz and shows the results
    clearInterval(timerInterval);
    quiz.className = "hidden";
    results.className = "";
}










