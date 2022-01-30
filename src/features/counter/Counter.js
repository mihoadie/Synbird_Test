import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  getRecipesAsync,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
             <button
          className={styles.asyncButton}
          onClick={() => dispatch(getRecipesAsync())}
        >
          Get recipes
        </button>
    </div>
  );
}
