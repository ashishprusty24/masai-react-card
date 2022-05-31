import React from 'react'
import styles from "../components/cardstyle.module.css"
const Part1 = ({date,logo}) => {
  return (
    <div className={styles.firstdiv}>
    <p>{date}</p>
    
    {/* <img src={logo}></img> */}
    <img src={logo} alt=""></img>
  </div>
  )
}

export default Part1