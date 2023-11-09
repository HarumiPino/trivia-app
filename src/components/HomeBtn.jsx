function HomeBtn({ setGameStarted }) {
  function resetGame() {
    setGameStarted(false);
  }

  return (
    <div className="home-btn-div">
      <button className="home-btn" onClick={resetGame}>
        Return Home
      </button>
    </div>
  );
}

export default HomeBtn;
