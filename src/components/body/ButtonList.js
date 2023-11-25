import React from 'react'
import Button from './Button'

const buttonList = ["All","Gaming","Web dev", "ICC World Cup", "Movie" ]
function ButtonList() {
  return (
    <div className='flex'>
      {buttonList.map( name =>   <Button key={name} name={name}/> )}
    </div>
  )
}

export default ButtonList