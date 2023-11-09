function IncorrectAnswer({ correctAnswer }) {
  return (
    <p className="incorrect-ans">
      Incorrect!❌ The correct answer is {correctAnswer}
    </p>
  );
}

export default IncorrectAnswer;
