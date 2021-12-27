//start quiz button
var startButton = document.getElementById("start-button");
//sections within the index page
var mainPage = document.getElementById("main-page");
var quiz = document.getElementById("quiz");
var results = document.getElementById("results");
var highScoresPage = document.getElementById("highscores");
//question and answers
var question = document.getElementById("question");
var button0 = document.getElementById("choice0");
var button1 = document.getElementById("choice1");
var button2 = document.getElementById("choice2");
var button3 = document.getElementById("choice3");
//response to answer
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
//Use for index to cycle through questions
var counter = 0;
//timer set-up
var timeEl = document.querySelector("#timer");
var secondsLeft = 76;
var timerInterval;
//Submit initials
var submitInitials = document.getElementById("submit-button");
//set up a blank array to hold the highscores
// var highScores = [];
//Go back button
var goBack = document.getElementById("go-back");
//High score link in header
var highScoreLink = document.getElementById("viewScores");
var clearBtn = document.getElementById("clear");
var score;
var highScores;
var ol = document.getElementById("scoreList");

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

//on click of start quiz button, run the startClick function
startButton.addEventListener("click", startClick);

//call function to generate the questions
generateQuestions();

//on click of the submit button, show high scores
submitInitials.onclick = saveScore;

//on click of the goback button, call the replay function
goBack.onclick = replay;

//on click of the high score link, call function linkToScores
highScoreLink.onclick = linkToScores;

//on click of clear button, call the clearScores function
clearBtn.onclick = clearScores;

function startClick () {
    //set timer to start running
    setTime();
    //Hide main page and show quiz
    mainPage.className = "hidden";
    quiz.className = "";
}
 
//Set-up timer to count down by one, and set an if statement to end the game if the timer runs out
function setTime() {

    timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
        //Call function to receive score
        scoreQuiz();
        }

    }, 1000);
}

function generateQuestions() {
    //put questions in the question h2 and choices in the buttons
    //counter will base it off of the index of the question
    question.textContent = quizQuestions[counter].question;
    button0.textContent = quizQuestions[counter].answers.a;
    button1.textContent = quizQuestions[counter].answers.b;
    button2.textContent = quizQuestions[counter].answers.c;
    button3.textContent = quizQuestions[counter].answers.d;
    
    //on click of any choice button, run nextQuestion function
    button0.onclick = nextQuestion;
    button1.onclick = nextQuestion;
    button2.onclick = nextQuestion;
    button3.onclick = nextQuestion;

    //set the value of the button to be the answer for that button
    //used later to compare value of button to correct answer 
    button0.setAttribute("value", quizQuestions[counter].answers.a);
    button1.setAttribute("value", quizQuestions[counter].answers.b);
    button2.setAttribute("value", quizQuestions[counter].answers.c);
    button3.setAttribute("value", quizQuestions[counter].answers.d);

}

//If correct, show 'correct' response, and move to next question.
//If wrong, subtract ten seconds from clock, show 'wrong' response, and move to next question. 
function nextQuestion() {

    //if the value matches the correct answer choice for this question...
    if (this.value === quizQuestions[counter].correctAnswer) {
        //have correct show up for one second
        correct.className = "";
        setTimeout(function(){
            //hide it again after second ends
            correct.className = "hidden"
        }, 1000)

    } else {
        //have wrong show up for one second
        wrong.className = "";
        setTimeout(function(){
            //hide it again after second ends
            wrong.className = "hidden"
        }, 1000)
        //take 10 seconds off the clock
        secondsLeft -= 10;
        //if taking off ten will make the score negative, give it one last second to count off so final result is 0
        if (secondsLeft <= 0){
            secondsLeft = 1;
        }
    }

    //increment by one no matter what, to cycle through the questions
    counter++;

    //if out of questions, scorequiz will run after a one-second timeout
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
    score = secondsLeft;
    var finalScore = document.getElementById("finalScore");
    finalScore.innerHTML = score;

    // Stops execution of action, hides the quiz and shows the results
    clearInterval(timerInterval);
    quiz.className = "hidden";
    results.className = "";
}

function saveScore(){
    highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    //Pull user input to an initials variable 
    var initials = document.getElementById("initials").value;
    score = secondsLeft;
    //Put the initials and score into a newScore object
    var newScore = {
        initials: initials,
        score: score
    };
    //push score object into highScores Array
    highScores.push(newScore);
    //sort the scores from high to low
    highScores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    //Put high scores into local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
    showScores();
}

function showScores(){
    //Hide results and show highscores, hide other elements in case of clicking view scores link
    results.className = "hidden";
    highScoresPage.className = "";
    mainPage.className = "hidden";
    quiz.className = "hidden";
    
    //clear old list
    removeAllChildNodes(ol);
     //for each score, create a li and append to list
    for (i=0; i <= highScores.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = highScores[i].initials + " - " + highScores[i].score;
        ol.appendChild(li);  
    }
}

  //remove the children of the ol to clear the old list
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Extra buttons and links
function replay() {
    //hide highscores and show main page
    highScoresPage.className = "hidden";
    mainPage.className = "";
    //reset count, timer, and be ready for the click on the start button again
    startButton.addEventListener("click", startClick);
    counter = 0;
    secondsLeft = 76;
}

//View HighScores from any part of the quiz
function linkToScores(){
    //stop timer
    clearInterval(timerInterval);
    //grab scores
    highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    showScores();
}

function clearScores(){
    window.localStorage.removeItem("highScores");
    window.location.reload();
}