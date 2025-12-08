import React from 'react'
import styles from './Styling.module.css'
function Styling() {
  return (
    <div>
      <h1 id='heading' className= {styles.head}>Welcome to my Webpage</h1>
      <h4 id='h4' className={styles.head}>List of Fruits</h4>
      <ul id='list' className={styles.head}>
        <li>Mango</li>
        <li>Grapes</li>
        <li>Banana</li>
        <li>Litchi</li>
      </ul>
    </div>
  )
}

export default Styling
