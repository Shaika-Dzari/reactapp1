import { combineReducers } from 'redux';
import { SAY_HELLO } from './HelloActions';

function hello(state = [], action) {
    switch (action.type) {
        case SAY_HELLO:
            return  [
                ...state,
                action.name
            ]
        default:
            return state;
    }
}

const helloApp = combineReducers({
    names: hello
});

export default helloApp;