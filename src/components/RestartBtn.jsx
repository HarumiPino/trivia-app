function RestartBtn({ setScore, fetchQuestion }) {
  function restartTrivia() {
    fetchQuestion();
    setScore(0);
  }

  return (
    <button className="restart-btn" onClick={restartTrivia}>
      Restart
    </button>
  );
}

export default RestartBtn;
