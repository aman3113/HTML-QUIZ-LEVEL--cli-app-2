var readLineSync = require("readline-sync")
var name = readLineSync.question("What is your Name?")
let score = 0

var levelOne = [
  {
    question: "What does abbreviation HTML stand for?",
    answer: "Hyper Text Mark Up Language"
  },
  {
    question: "How many sizes of headers are available in HTML?",
    answer: "6"
  },
  {
    question: "What is the smallest header in HTML by default?",
    answer: "h6"
  },
  {
    question: "How to create an ordered list in HTML?",
    answer: "<ol>"
  },
  {
    question: "HTML files are saved by default with the extension?",
    answer: ".html"
  },

]

var levelTwo = [
  {
    question: "How to display preformatted text in HTML?",
    answer: "<pre>"
  },
  {
    question: "Which attribute is used to provide a unique name to an HTML element?",
    answer: "id"
  },
  {
    question: "Apart from <i> tag, which of the following tag is used to render a text in italics?",
    answer: "<em>"
  },
  {
    question: "What does the Alpha value of 0.0 represent?",
    answer: "Fully transparent"
  },
  {
    question: "The CSS inside HTML elements used alongside style attribute is called?",
    answer: "inline CSS"
  },

]

console.log("Hello " + name + " your HTML quizz is ready. Qualifiy leve one by scoring 4 marks or above.")
console.log("_______________")

function askQue(level) {
  for (let i = 0; i < level.length; i++) {
    var ans = readLineSync.question(level[i].question)

    if (level[i].answer === ans) {
      console.log("you got it right.")
      score++
    } else {
      console.log("that was wrong ans")

      var check = readLineSync.question("Show Ans?")
      if (check === "yes") {
        console.log("The correct ans is : " + level[i].answer)
      }
    }
    console.log("Current Score: " + score)
    console.log("________")
  }

}
askQue(levelOne)
console.log(" Your Score is :" + score)
console.log("-----")

if (score >= 4) {
  console.log("Hurray!🥳🥳 You are eligible for level 2")
  console.log("     ")
  askQue(levelTwo)
} else {
  console.log("Better Luck Next Time")
}

console.log("Your Final Score is: " + score)

