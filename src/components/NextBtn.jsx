function NextBtn({ fetchQuestion }) {
  function nextQuestion() {
    fetchQuestion();
  }

  return (
    <button className="next-btn" onClick={nextQuestion}>
      Next Question
    </button>
  );
}

export default NextBtn;
