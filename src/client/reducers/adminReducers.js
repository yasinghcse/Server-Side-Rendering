import {FETCH_ADMIN} from "../actions/index";

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_ADMIN:
            return action.payload;
        default:
            return state;
    };
};