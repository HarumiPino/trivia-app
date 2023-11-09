function AnswerButton({ text, isCorrect, setAnswerStatus, setScore, score }) {
  function handleAnswer() {
    if (isCorrect) {
      setScore(score + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("incorrect");
    }
  }

  return (
    <button className="answer-btn" type="button" onClick={handleAnswer}>
      {text}
    </button>
  );
}

export default AnswerButton;
