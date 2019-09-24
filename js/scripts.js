/*
IIFE - Immediately Invoked Function Expression
IIFEs un as soon as they are defined.
They are commonly used to keep variables/funcitions outside of the global scope and they tend to work better if you're running multiple scripts.
*/

(function() {
    // Make references with the elements that we are going to be interacting with.
    var quizContainer = document.getElementById("quiz");
    var  submitBtn = document.getElementById("submit");
    var reset = document.getElementById("reset");
    var results = document.getElementById("results");

    var myQuestions = [];
    // What does a quiz question consist of?
    // Question text, Answer choices, correct answer.

    var question1 = {
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green"
        },
        correctAnswer: "a"
    }

    var question2 = {
        question: "What is the capital city of Peru?",
        answers: {
            a: "Lima",
            b: "Cusco",
            c: "No idea",
        },
        correctAnswer: "a"
    }

    var question3 = {
        question: "Where is Waldo really?",
        answers: {
            a: "Antartica",
            b: "Exploring the Pacific Ocean",
            c: "Sitting in a tree"
        },
        correctAnswer: "c"
    }

    // Add the question to our array of questions.
    myQuestions.push(question1, question2, question3);


    // Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {

    }
    // Function to show the results of the quiz
    function showResults() {

    }
    // function to reset the quiz
    function resetQuiz() {
        
    }
    console.log(myQuestions);
})();
