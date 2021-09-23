var startButton = document.getElementById("start-button");
var mainPage = document.getElementById("main-page");
var quiz = document.getElementById("quiz");
var results = document.getElementById("results");
var highscores = document.getElementById("highscores");
//Set starting score to have a baseline for finding the score a player earns
var score = 0;
var quizQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		answers: {
			a: '1. strings',
			b: '2. booleans',
			c: '3. alerts',
            d: '4. numbers'
		},
		correctAnswer: 'c'
	},
	{
		question: "The condition in an if/else statement is enclosed within _____.",
		answers: {
			a: '1. quotes',
			b: '2. curly brackets',
			c: '3. parentheses',
            d: '4. square brackets'
		},
		correctAnswer: 'c'
	},
    {
		question: "Arrays in JavaScript can be used to store _____.",
		answers: {
			a: '1. numbers and strings',
			b: '2. other arrays',
			c: '3. booleans',
            d: '4. all of the above'
		},
		correctAnswer: 'd'
	},
    {
		question: "String values must be enclosed within ______ when being assigned to variables.",
		answers: {
			a: '1. commas',
			b: '2. curly brackets',
			c: '3. quotes',
            d: '4. parentheses'
		},
		correctAnswer: 'c'
	},
    {
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answers: {
			a: '1. JavaScript',
			b: '2. terminal/bash',
			c: '3. for loops',
            d: '4. console.log'
		},
		correctAnswer: 'd'
	}
];



function startClick () {
    setTime();
    //Hide main page and show quiz
    mainPage.className = "hidden";
    quiz.className = "";

    
    var timeEl = document.querySelector("#timer");
    var secondsLeft = 76;

    //Start timer, and set an if statement to end the game if the timer runs out
    function setTime() {
      // Sets interval in variable
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
            // Stops execution of action, hides the quiz and shows the results
            clearInterval(timerInterval);
            quiz.className = "hidden";
            results.className = "";
            //Call function to score quiz
            scoreQuiz();
            }

      }, 1000);
    }


    //Generate the quiz questions
    function generateQuiz(){
        for (i=0; i <= quizQuestions.length; i++) {
            //Show the first question
            var question = document.getElementById("question");
            question.textContent = quizQuestions[0].question;


            var answerButtons = document.querySelector('.quizButton');
            answerButtons.onclick = function() {
	    
            }
            //show if it is right or wrong, and take time off the clock if wrong
            // if (quizQuestions[0].correctAnswer)
        
        }
    } 

    function scoreQuiz() {
        var finalScore = document.getElementById("finalScore");
        finalScore.innerHTML = "Your final score is " + score + "."
    }

    generateQuiz();

}

startButton.addEventListener("click", startClick);




