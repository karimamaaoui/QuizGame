function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0
}

//index of current question
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex]; 
}

Quiz.prototype.isEnded = function () {
    // Compare the questionIndex with the length of questions array
    return this.questionIndex === this.questions.length;
}


//check if the anwser is correct or not
Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    // Increment the questionIndex after checking the answer
    this.questionIndex++;
}
