export default (state = {newGame: true}, action) => {
    switch (action.type){
        case 'END_GAME_DATA':
            return action.payload;

        default:
            return state;
    }
}