function IncorrectAnswer({ correctAnswer }) {
  return (
    <p className="incorrect-ans">
      Incorrect!❌ The correct answer is {correctAnswer.text}
    </p>
  );
}

export default IncorrectAnswer;
