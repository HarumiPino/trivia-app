
function AnswerButton({text,isCorrect,setAnswerStatus}){

    function handleAnswer(){
        if (isCorrect){
            setAnswerStatus("correct");
        }
        else {
            setAnswerStatus("incorrect");
        }
    };


    return <button className='answer-btn' type='button' onClick={handleAnswer}>{text}</button>
};

export default AnswerButton;
