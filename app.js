function populate() {
  if (quiz.isEnded()) {
      showScores();
  } else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show choices
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          // click on wrong or correct answer
          guess("btn" + i, choices[i]);
      }
      showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      // call the function guess in quiz
      quiz.guess(guess);
      populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHtml = "<h1>Result </h1>";
  gameOverHtml += "<h2 id='score'> Your Score : " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}




var questions = [
  new Question("Which one is not an object-oriented programming language ?", ["java", "c#", "c++", "c"], "c"),
  new Question("Which one is used for styling web pages ?", ["HTML", "Jquery", "CSS", "XML"], "CSS"),
  new Question("There are _______ main components of object-oriented programming.", ["1", "6", "2", "4"], "4"),
  new Question("Which language is used for a web app ?", ["PHP", "Python", "Javascript", "All"], "All"),
];

// create an object quiz
var quiz = new Quiz(questions);



function startQuiz() {
  // Reset the score and question index
  quiz.score = 0;
  quiz.questionIndex = 0;

  // Call populate to start the quiz
  populate();
}

// Add this line at the end of your existing code
//populate();

//start the quiz
startQuiz();
