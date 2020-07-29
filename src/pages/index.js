import React from "react";
import './styles.css';

import styles from './test.module.scss';

export default function Home() {
  return <div className={`content ${styles.content}`}>Hello world!</div>
}
