/*
IIFE - Immediately Invoked Function Expression
IIFEs un as soon as they are defined.
They are commonly used to keep variables/funcitions outside of the global scope and they tend to work better if you're running multiple scripts.
*/

(function() {
    // Make references with the elements that we are going to be interacting with.
    var quizContainer = document.getElementById("quiz");
    var submitBtn = document.getElementById("submit");
    var resetBtn = document.getElementById("reset");
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
            c: "No idea"
        },
        correctAnswer: "a"
    }

    var question3 = {
        question: "Where is Waldo really?",
        answers: {
            a: "Antartica",
            b: "Exploring the Pacific Ocean",
            c: "Sitting in a tree",
            d: "Minding his own business"
        },
        correctAnswer: "d"
    }

    // Add the question to our array of questions.
    myQuestions.push(question1, question2, question3);


    // Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {
        // We need to go through each of our question objects and use them to build out the HTML to show a question.
        for (var i = 0; i < myQuestions.length; i++) {
            // Create a display for the question text

            //Create a new div called questionDiv that will hold information about a single question.
            var questionDiv = document.createElement("div");

            // Get the quetion text from the question we are looking at with this iteration or the loop.
            questionDiv.innerText = myQuestions[i].question;

            // Create a div to hold the answers
            var answersDiv = document.createElement("div");
            answersDiv.classList.add("answers");

            // For each property in the current question's answers object
            for (letter in myQuestions[i].answers) {
                // ^ A for-in loop is used to go through the properties of the object.

                var label = document.createElement("label");

                // Create a radio button for each answer for this question
                var input = document.createElement("input");

                // Configure the input element
                input.type = "radio";
                input.name = "question" + i;
                input.value = letter;

                // Add Element input to label
                label.appendChild(input); 

                // Create some text from the current letter we're looking at and the corresponding answer for that letter
                var labelText = document.createTextNode(`${letter} : ${myQuestions[i].answers[letter]}`);

                // Add the text to the label
                label.appendChild(labelText);

                // Add the label to the answerDiv
                answersDiv.appendChild(label);
            }
            // Once all the answers have been added to a 
            questionDiv.appendChild(answersDiv);

            // Add the questionDiv to the QuizContainer.
            quizContainer.appendChild(questionDiv);
        }
    }

    buildQuiz();

    // Function to show the results of the quiz
    function showResults() {
        var answerContainers = quizContainer.querySelectorAll(".answers"); // ^ This will basically give us back an array containing everything in the quizContainer with the class "answers".

        var numCorrect = 0;
        
        for (i = 0; i < answerContainers.length; i++) {
            // Get the current answer container we're looking at for the loop
            var answerContainer = answerContainers[i];

            // String to find which input is checked for the current question.
            var selector = `input[name=question${i}]:checked`;

            var userAnswer = (answerContainer.querySelector(selector) || {}).value; // If it can't find a selected input for a question, querySelector will gitve back null.

            if (userAnswer === myQuestions[i].correctAnswer) {
                // Its correct
                answerContainer.style.color = "green";
                numCorrect++;
            } else {
                // Its wrong
                answerContainer.style.color = "red";
            }
        }
        results.innerText = "You got " + numCorrect + " out of " + myQuestions.length;
    }
        
    //Call the showResults function when the submit button is clicked
    submitBtn.addEventListener("click", showResults);

    // function to reset the quiz
    function resetQuiz() {
        // Clear out what's inside the results container
        results.innerText = "";
        // Clear out the quiz container
        quizContainer.innerText = "";
        // Rebuild Quiz
        buildQuiz();
    }

    resetBtn.addEventListener("click", resetQuiz);
})();
