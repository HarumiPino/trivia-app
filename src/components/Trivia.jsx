import AnswerButton from "./AnswerButtton";


function Trivia() {
  return (
    <div>
      <h2>Science and Math</h2>
      <div className="question-container">
        <p className="question">What is the square root of 50?</p>
      </div>
      <AnswerButton text={'Answer A'} />
      <AnswerButton text={'Answer B'} />
      <AnswerButton text={'Answer C'} />
      <AnswerButton text={'Answer D'} />
    </div>
  );
}

export default Trivia;
