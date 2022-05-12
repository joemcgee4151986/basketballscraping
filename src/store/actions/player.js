import {GET_PLAYER} from '.actionTypes';

export function getPlayer(firstName, lastName) {
    return {
        type:GET_PLAYER,
        payload: {firstName, lastName}
    }
}