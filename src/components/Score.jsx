function Score({ score, final }) {
  var text = final ? "Final Score: " : "Score: ";
  return <p className="score">{text + score}</p>;
}

export default Score;
