import AnswerButton from "./AnswerButtton";
import CorrectAnswer from "./CorrectAnswer";
import IncorrectAnswer from "./IncorrectAnswer";
import HomeBtn from "./HomeBtn";
import NextBtn from "./NextBtn";
import RestartBtn from "./RestartBtn";
import Score from "./Score";
import { useEffect, useState } from "react";

function Trivia({ category, setGameStarted }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answerStatus, setAnswerStatus] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
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
        setQuestion(decode(data.question));
        setAnswers(formatAnswers(data));
        setAnswerStatus("");
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
            setScore={setScore}
            score={score}
          />
        ))}
      {answerStatus === "correct" && (
        <>
          <CorrectAnswer correctAnswer={decode(correctAnswer.text)} />
          <Score score={score} final={false} />
          <NextBtn fetchQuestion={fetchQuestion} />
        </>
      )}
      {answerStatus === "incorrect" && (
        <>
          <IncorrectAnswer correctAnswer={decode(correctAnswer.text)} />
          <Score score={score} final={true} />
          <RestartBtn setScore={setScore} fetchQuestion={fetchQuestion} />
        </>
      )}

      <HomeBtn setGameStarted={setGameStarted} />
    </div>
  );
}

export default Trivia;
