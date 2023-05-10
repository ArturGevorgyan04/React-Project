import { 
    INCREMENT,
    DECREMENT,
    INPUT_TEXT
 } from "./types";

const initialState = {
    likes: 0,
    text: '',
    comments: [],
}

export const likesReducer = (state = initialState, action) => {
    // cankacac Reducer yndunum e state ev action y ev veradarcnum state
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1,
            };
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1,
            };
        case INPUT_TEXT:
            return {
                ...state, // katarum enq vicaki kopian 
                text: action.text, // tarmacnum enq teqsty
            }
            default:
                return state;
    }
}