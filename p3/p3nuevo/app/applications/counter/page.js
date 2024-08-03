"use client"; 
import React, { useState } from 'react';
import styles from "../../style/counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contador</h2>
      <div className={styles.counterContainer}>
        <button className={styles.button} onClick={decrement}>-</button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
