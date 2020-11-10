import {END_GAME_DATA} from './actions';


export const creatEndGameData = (payload) => {
    return {type: END_GAME_DATA, payload}
};