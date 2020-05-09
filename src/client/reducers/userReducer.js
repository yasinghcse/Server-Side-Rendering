import {FETCH_USES} from "./../actions/index";

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_USES:
            return action.payload;
        default:
            return state;
    };
};