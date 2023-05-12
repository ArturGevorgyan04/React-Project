import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMENT_CREATE,
    COMENT_DELETE,
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
            };
        case COMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data],
            };
        case COMENT_DELETE:
            return (() => {
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex((res) => res.id === id)
                console.log(itemIndex, '        itemIndex');

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ];
                return {
                    ...state,
                    comments: nextComments,
                    // comments: [...state.comments, action.data]
                }
            })();
        default:
            return state;
    }
}