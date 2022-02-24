import {createStore} from'redux';

const initialState = { counter:1000, showCounter:false};
const counterReducer = (state = initialState, action)=>{

    if(action.type === 'depositMon'){
        return {
            counter: state.counter + +action.amount,
            showCounter:state.showCounter


        };
    }
    if(action.type === 'increase100'){
        return {
            counter: state.counter + action.amount,
            showCounter:state.showCounter


        };
    }
    if(action.type === 'increase200'){
        return {
            counter: state.counter + action.amount,
            showCounter:state.showCounter


        };
    }
    if(action.type === 'increase500'){
        return {
            counter: state.counter + action.amount,
          showCounter:state.showCounter

        };
    }
    if(action.type === 'increase1000'){
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
    if(action.type === 'decrement2'){
        return {
            counter: state.counter +action.amount,
            showCounter:state.showCounter

        };
    }
    if(action.type === 'decrement5'){
        return {
            counter: state.counter +action.amount,
            showCounter:state.showCounter

        };
    }
    if(action.type === 'decrement10'){
        return {
            counter: state.counter +action.amount,
            showCounter:state.showCounter

        };
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