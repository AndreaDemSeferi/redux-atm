import {useSelector,useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
const dispatch = useDispatch();
const counter = useSelector(state => state.counter);
const show = useSelector(state=>state.showCounter);

const incrementHandler = () => {
  dispatch({ type: 'increment',amount:100
  });
}
const increaseHandler2 = () => {
  dispatch({ type: 'increase100',amount:200
  });
}
const increaseHandler5 = () => {
  dispatch({ type: 'increase500',amount:500
  });
}
const increaseHandler10 = () => {
  dispatch({ type: 'increase1000',amount:1000
  });
}
const decrementHandler = () => {
  dispatch({
    type: 'decrement'
  });
}
const decrementHandler2 = () => {
  dispatch({
    type: 'decrement2',amount:-200
  });
}
const decrementHandler5 = () => {
  dispatch({
    type: 'decrement5',amount:-500
  });
}
const decrementHandler10 = () => {
  dispatch({
    type: 'decrement10',amount:-1000
  });
}

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
     {show && <div>
        <div><button onClick={incrementHandler}>100</button>
        <button onClick={increaseHandler2}>200</button>
        <button onClick={increaseHandler5}>500</button>
        <button onClick={increaseHandler10}>1000</button></div>
        <div>
        <button onClick={decrementHandler}>-100</button>
        <button onClick={decrementHandler2}>-200</button>
        <button onClick={decrementHandler5}>-500</button>
        <button onClick={decrementHandler10}>-1000</button></div>
      </div>}
      <button onClick={toggleCounterHandler}>ATM</button>
    </main>
  );
};

export default Counter;
