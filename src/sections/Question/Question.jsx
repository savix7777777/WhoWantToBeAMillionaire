import React,{useState} from 'react';
import Button from "../../components/Button";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {creatEndGameData} from "../../store/actions/actionCreator";
import GainPanel from "../../components/GainPanel";
import PropTypes from 'prop-types';


const arrEN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const Question = ({questionNumber, question, answers, correctAnswers, gain, data}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(false);
    const [modalState, setModalState] = useState(false);

    const sendGameData = (value) => dispatch(creatEndGameData(value));

    const handleChooseAnswer = ({target}) => {
        setDisabled('disabled');
        let selectedValue = target.id;
        let button = target;
        if(!target.id){
            selectedValue = target.parentNode.id;
            button = target.parentNode;
        }
        if(correctAnswers.includes(selectedValue)){
            button.classList.remove('question__answer');
            button.classList.add('question__answer-green');
            if(questionNumber === 12) {
                sendGameData({
                    newGame: false,
                    gain,
                });
                setTimeout(() => {
                    history.push('/');
                },1000);
            } else {
                setTimeout(() => {
                    history.push(`/question-${questionNumber+1}`);
                },1000);
            }
        } else {
            button.classList.remove('question__answer');
            button.classList.add('question__answer-red');
            sendGameData({
                newGame: false,
                gain,
            });
            setTimeout(() => {
                history.push('/');
            },1000);
        }
    };

    return(
        <section className='question'>
            <Button onClick={() => history.push('/')} className='question-return'><i className="fas fa-arrow-left"> </i></Button>
            <Button className='question__show-gain' onClick={() => setModalState(!modalState)}>
                {!modalState && <i className="fas fa-bars"> </i>}
                {modalState && <i className="fas fa-times"> </i>}
            </Button>
            <div className={`${(modalState) ? 'question__modal-box' : 'question__modal-hide'}`}>
                <GainPanel indexV={questionNumber-1} data={data} mobile={true} />
            </div>
            <div className='question__content'>
                <h2 className='question__title'>{question}</h2>
                <div className='question__answers-box'>
                    {answers.map((item,index) => {
                        return(
                            <Button
                                disabled={disabled}
                                id={item}
                                key={index}
                                onClick={handleChooseAnswer}
                                className='question__answer'
                            >
                                <p className='question__answer-letter'>{arrEN[index]}</p>
                                <p>{item}</p>
                            </Button>
                        )
                    })}
                </div>
            </div>
            <GainPanel indexV={questionNumber-1} data={data}/>
        </section>
    );
};

Question.propTypes = {
    questionNumber: PropTypes.number.isRequired,
    question: PropTypes.string,
    answers: PropTypes.array.isRequired,
    correctAnswers: PropTypes.array.isRequired,
    gain: PropTypes.string,
    data: PropTypes.array.isRequired,
};

Question.defaultProps = {
    questionNumber: 1,
    question: '',
    answers: [],
    correctAnswers: [],
    gain: '',
    data: [],
};

export default Question;