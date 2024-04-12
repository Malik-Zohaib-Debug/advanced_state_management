import { createStore } from "redux";

const reducerFe = (state = {counter : 10}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT':
            return {counter : state.counter - 1};
        default:
            return state;
    }
}

const store = createStore(reducerFe);

export default store;