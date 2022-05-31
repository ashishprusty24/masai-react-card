import React from 'react'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
import Part4 from './Part4'
import Part5 from './Part5'
import styles from "../components/cardstyle.module.css"
const Main = ({date,logo,heading,subheading,devices,color}) => {
  return (
    <div  style={{backgroundColor:color}} className= {styles.maindiv}>
        <Part1 date={date} logo ={logo}/>
        <Part2/>
        <Part3 heading={heading}/>
        <Part4 subheading={subheading}/>
        <Part5 devices={devices}/>
    </div>
  )
}

export default Main