var startButton = document.getElementById("start-button");
var mainPage = document.getElementById("main-page");
var quiz = document.getElementById("quiz");
var results = document.getElementById("results");
var highscores = document.getElementById("highscores");
var quizQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		answers: {
			a: 'strings',
			b: 'booleans',
			c: 'alerts',
            d: 'numbers'
		},
		correctAnswer: 'c'
	},
	{
		question: "The condition in an if/else statement is enclosed within _____.",
		answers: {
			a: 'quotes',
			b: 'curly brackets',
			c: 'parentheses',
            d: 'square brackets'
		},
		correctAnswer: 'c'
	},
    {
		question: "Arrays in JavaScript can be used to store _____.",
		answers: {
			a: 'numbers and strings',
			b: 'other arrays',
			c: 'booleans',
            d: 'all of the above'
		},
		correctAnswer: 'd'
	},
    {
		question: "String values must be enclosed within ______ when being assigned to variables.",
		answers: {
			a: 'commas',
			b: 'curly brackets',
			c: 'quotes',
            d: 'parentheses'
		},
		correctAnswer: 'c'
	},
    {
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answers: {
			a: 'JavaScript',
			b: 'terminal/bash',
			c: 'for loops',
            d: 'console.log'
		},
		correctAnswer: 'd'
	}
];

function startClick () {
    setTime();
    //Hide main page and show quiz
    mainPage.className = "hidden";
    quiz.className = "";

    //Start timer, and set an if statement to end the game if the timer runs out
    var timeEl = document.querySelector("#timer");
    var secondsLeft = 76;

    function setTime() {
      // Sets interval in variable
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          quiz.className = "hidden";
          results.className = "";
          //Call function to score quiz
          scoreQuiz();
        }

      }, 1000);
    }

    //Generate the quiz questions
    function generateQuiz(questions, quizContainer, resultsContainer, buttonPress){
        for (i=0; i <= quizQuestions.length; i++) {
            //Show the questions
            function showQuestions(questions, quizContainer){
                // code will go here
            }
            
            //show if it is right or wrong, and take time off the clock if wrong
            function showResults(questions, quizContainer, resultsContainer){
                // code will go here
            }
        
            // show the questions
            showQuestions(questions, quizContainer);
        
            // when user clicks a choice, show next page
            buttonPress.onclick = function(){
                //if questions remain, show question.
                //if no questions remain, show results and stop timer
                showResults(questions, quizContainer, resultsContainer);
            }
        }
    } 

    generateQuiz();

}

startButton.addEventListener("click", startClick);




