


import React, { useState } from 'react'


const App = () => {
  const totalBoxes=10
  const [activeBoxes,setActiveBoxes]=useState([])
  const [isReversing,setIsReversing]=useState(false)

  const handelClick=(index)=>{
if(isReversing)return;
if(activeBoxes.includes(index))return

const update=[...activeBoxes,index]
setActiveBoxes(update)

if(index===totalBoxes-1){
  startReverse(update)
}
  }
  const startReverse=(a)=>{
    setIsReversing(true)
    let stack=[...a]

    const interval=setInterval(()=>{
      stack.shift()
      setActiveBoxes([...stack])

      if(stack.length===0){
        clearInterval(interval)
        setIsReversing(false)
      }
    },300)
  }
  const container={
    
    display:"flex",
    gap:"50px",
    border:"5px solid black",
    width:"fic=x-content"
  }
  const boxStyle={
    width:"100px",
    height:"100px"
  }
  return (
    <div style={container}>
      {Array.from({length:totalBoxes}).map((_,index)=>(
        <div
        key={index}
        onClick={()=>handelClick(index)}
        style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
      ))}
    </div>
  )
}

export default App


