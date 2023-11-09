import AnswerButton from "./AnswerButtton";
import CorrectAnswer from "./CorrectAnswer";
import IncorrectAnswer from "./IncorrectAnswer";
import HomeBtn from "./HomeBtn";
import { useEffect, useState } from "react";

function Trivia({ category, setGameStarted }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answerStatus, setAnswerStatus] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  var query = category.id > 0 ? `&category=${category.id}` : "";

  useEffect(() => {
    fetchQuestion();
  }, []);

  function fetchQuestion() {
    fetch("https://opentdb.com/api.php?amount=1" + query)
      .then((response) => {
        return response.json();
      })
      .then(({ results: [data] }) => {
        //console.log(data);
        setQuestion(decode(data.question));
        setAnswers(formatAnswers(data));
      });
  }

  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  function formatAnswers(data) {
    var answers = [{ text: data.correct_answer, isCorrect: true }];
    setCorrectAnswer(answers[0]);
    console.log(answers[0]); // DELETE THIS WHEN FINISHED
    data.incorrect_answers.forEach((answer) => {
      answers.push({ text: answer, isCorrect: false });
    });
    return shuffleAnswers(answers);
  }

  function shuffleAnswers(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  return (
    <div>
      <h2>{category.name}</h2>
      <div className="question-container">
        <p className="question">{question}</p>
      </div>
      {answerStatus === "" &&
        answers.map(({ text, isCorrect }, ind) => (
          <AnswerButton
            setAnswerStatus={setAnswerStatus}
            key={ind}
            text={decode(text)}
            isCorrect={isCorrect}
          />
        ))}
      {answerStatus === "correct" && (
        <CorrectAnswer correctAnswer={correctAnswer} />
      )}
      {answerStatus === "incorrect" && (
        <IncorrectAnswer correctAnswer={correctAnswer} />
      )}
      <HomeBtn setGameStarted={setGameStarted} />
    </div>
  );
}

export default Trivia;
