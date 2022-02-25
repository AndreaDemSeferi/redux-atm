import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
const dispatch = useDispatch();


const counter = useSelector(state => state.counter);
 

const show = useSelector(state => state.showCounter);

const incrementHandler = (money) => {
  dispatch({
    type: 'increase',
    amount: money
  });
}



const decrementHandler = (money) => {
  if (counter <= 0 || counter < money)
    return 

  dispatch({
    type: 'decrement',
    amount: -money
  });
}
 

const toggleCounterHandler = () => {
  dispatch({type:'toggle'});
};

 
const deposits = () => {
    const depositInput = document.querySelector('#depositInput')
    console.log('depositInput', typeof depositInput.value);

    dispatch({
      type:'depositMon',
      amount: depositInput.value
    });
  };

  const withdraws = (e) => {
    
  if (counter <= 0 || counter < e.target.nextElementSibling.value)
  return 


    dispatch({
      type:'withdrawMon',
      amount: e.target.nextElementSibling.value
    })
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      {show && <div className={classes.value}>{counter}</div>}
     
     
      {show && 
      <div id="deposit-withdraw">
        <section id="deposit-money">
          <div>
            <button onClick={deposits}>Desposit</button>
            <input id="depositInput" type="number" placeholder='deposit'/> 
          </div>
      
          <button onClick={() => incrementHandler(100)}>100</button>
          <button onClick={() => incrementHandler(200)}>200</button>
          <button onClick={() => incrementHandler(500)}>500</button>
          <button onClick={() => incrementHandler(1000)}>1000</button>
        </section>

        <section id="withdraw-money">
          <div>
            <button onClick={withdraws}>Withdraw</button>
            <input type="number" placeholder='withdraw'/> 
          </div>
          
          <button onClick={() => decrementHandler(100)}>-100</button>
          <button onClick={() => decrementHandler(200)}>-200</button>
          <button onClick={() => decrementHandler(500)}>-500</button>
          <button onClick={() => decrementHandler(1000)}>-1000</button>
        </section>
      </div>}
      
      <button onClick={toggleCounterHandler}>ATM</button>
    </main>
  );
};

export default Counter;
