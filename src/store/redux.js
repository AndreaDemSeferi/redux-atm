import {createStore} from'redux';

const initialState = { counter:1000, showCounter:false};
const counterReducer = (state = initialState, action)=>{

    if(action.type === 'depositMon'){
        return {
            counter: state.counter + +action.amount,
            showCounter:state.showCounter


        };
    }
    if(action.type === 'withdrawMon'){
        return {
            counter: state.counter + -action.amount,
            showCounter:state.showCounter


        };
    }
    
    if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
            showCounter:state.showCounter
        };
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter + action.amount,
            showCounter:state.showCounter

        }
    }

    if(action.type === 'toggle'){
        return {
            showCounter:!state.showCounter,
            counter:state.counter
        };
    }
    return state;
};

const store = createStore(counterReducer);

export default store;