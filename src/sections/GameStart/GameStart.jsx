import React from 'react';
import Button from "../../components/Button";
import hand from '../../styles/img/hand.png'
import {useHistory} from "react-router";
import {shallowEqual, useSelector} from "react-redux";
import PropTypes from 'prop-types';


const GameStart = ({gameConfig}) => {

    const replayGame = useSelector(({endGameData}) => endGameData,shallowEqual);
    const history = useHistory();

    const startGame = () => {
        if(gameConfig){
            history.push('/question-1');
        }
    }

    return(
        <section className={`game-start ${!replayGame.newGame && 'game-start-false'}`}>
            <img className={`game-start__hand ${!replayGame.newGame && 'game-start__hand-false'}`} src={hand} alt='hand'/>
            <div className={`game-start__right-box ${!replayGame.newGame && 'game-start__right-box-false'}`}>
                {!replayGame.newGame && <p className='game-start__total-score'>Total score:</p>}
                <h1 className={`game-start__h1 ${!replayGame.newGame && 'game-start__total-score-false'}`}>{(!replayGame.newGame) ? `${replayGame.gain} earned` : 'Who wants to be a millionaire?'}</h1>
                <Button onClick={startGame} className='game-start__start'>{!replayGame.newGame ? 'Try again' : 'Start'}</Button>
            </div>
        </section>
    );
};

GameStart.propTypes = {
    gameConfig: PropTypes.array.isRequired,
};

GameStart.defaultProps = {
    gameConfig: [],
}

export default GameStart;