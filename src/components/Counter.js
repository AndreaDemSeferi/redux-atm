import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
const dispatch = useDispatch();
const counter = useSelector(state => state.counter);
const show = useSelector(state=>state.showCounter);
console.log(counter);


const incrementHandler = () => {
  dispatch({ type: 'increase100',amount:100
  });
}
const increaseHandler2 = () => {
  dispatch({ type: 'increase200',amount:200
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
const decrementHandler = (pengar) => {

  if (pengar <= 0 || pengar > counter)
 
  {
    return 
     console.log(counter);
  console.log(typeof counter);
  console.log(pengar + counter);
  }
  dispatch({
    type: 'decrement',amount:-100
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
  const deposits = (e) => {
    dispatch(
      {
        type:'depositMon',
      amount:e.target.nextElementSibling.value
    }
      );

  };
  const withdraws = (e) => {
    dispatch({type:'withdrawMon'})
    console.log(e.target);
     
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
     {show && <div>

        <div>
          <div>
            <button onClick={(deposits)}>Desposit</button>
          <input type="number" placeholder='deposit'/> 
         </div>
       
          <button onClick={incrementHandler}>100</button>
        <button onClick={increaseHandler2}>200</button>
        <button onClick={increaseHandler5}>500</button>
        <button onClick={increaseHandler10}>1000</button></div>
        <div>

        <div>
          <button onClick={(withdraws)}>Withdraw</button>
          <input type="number" placeholder='withdraw'/> 
          </div>
        <button onClick={()=>decrementHandler(-100)}>-100</button>
        <button onClick={decrementHandler2}>-200</button>
        <button onClick={decrementHandler5}>-500</button>
        <button onClick={decrementHandler10}>-1000</button></div>
      </div>}
      <button onClick={toggleCounterHandler}>ATM</button>
    </main>
  );
};

export default Counter;
