import React from 'react'
import Bounce from './Bounce'
import Avater from './Avater'
const Person = ({height}) => {
  return (
    <div className={height < 901 ? 'person1' : "person"}>
        {/* <div className='person__container'> */}
        <Bounce/>
        <Avater/>
        </div>
    // </div>
  )
}

export default Person