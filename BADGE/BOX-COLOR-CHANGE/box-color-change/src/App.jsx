


// import React, { useState } from 'react'


// const App = () => {
//   const totalBoxes=10
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handelClick=(index)=>{
// if(isReversing)return;
// if(activeBoxes.includes(index))return

// const update=[...activeBoxes,index]
// setActiveBoxes(update)

// if(index===totalBoxes-1){
//   startReverse(update)
// }
//   }
//   const startReverse=(a)=>{
//     setIsReversing(true)
//     let stack=[...a]

//     const interval=setInterval(()=>{
//       stack.shift()
//       setActiveBoxes([...stack])

//       if(stack.length===0){
//         clearInterval(interval)
//         setIsReversing(false)
//       }
//     },300)
//   }
//   const container={

//     display:"flex",
//     gap:"50px",
//     border:"5px solid black",
//     width:"fit-content"
//   }
//   const boxStyle={
//     width:"100px",
//     height:"100px"
//   }
//   return (
//     <div style={container}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div
//         key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
//       ))}
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handelClick=(index)=>{
//     if(isReversing)return;
//     if(activeBoxes.includes(index))return

//     const update=[...activeBoxes,index]
//     setActiveBoxes(update)

//     if(index===totalBoxes-1){
//       startReverse(update)
//     }
//   }
//   const startReverse=(a)=>{
//     setIsReversing(true)
//     let stack=[...a]

//     const interval=setInterval(()=>{
//       stack.shift()
//       setActiveBoxes([...stack])

//       if(stack.length===0){
//         clearInterval(interval)
//         setIsReversing(false)

//       }
//     },300)
//   }
//   const containerStyle={
//     display:"flex",
//     gap:"50px",
//     height:"50px",
//     border:"5px solid black",
//     width:"fit-content"
//   }
//   const boxStyle={
//     width:"50px",
//     height:"50px"
//   }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"blue":"white"}}/>
//       ))}

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10;
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)
//   const handelClick=(index)=>{
//     if(isReversing)return
//     if(activeBoxes.includes(index))return

//     const update=[...activeBoxes,index]
//     setActiveBoxes(update)

//     if(index===totalBoxes-1){
//       startReverse(update)
//     }
// }
// const startReverse=(a)=>{
//   setIsReversing(true)
//   let stack=[...a]

//   const interval=setInterval(()=>{
//     stack.pop()
//     setActiveBoxes([...stack])
//     if(stack.length===0){
//       clearInterval(interval)
//       setIsReversing(false)
//   }
// },300)
// }
// const containerStyle={
//   display:"flex",
//   width:"fit-content",
//   gap:"20px",
//   border:" 5px solid black",


// }
// const boxstyle={
//   width:"50px",
//   height:"50px"
// }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div
//         key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxstyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}
//         />
//       ))}

//     </div>
//   )
// }

// export default App

// import React, { useState ,useEffect} from 'react'

// const lights =[
//   {color:"red",duration:4000},
//   {color:"yellow",duration:3000},
//   {color:"green",duration:2000}
// ]
// const App = () => {
// const [index,setIndex]=useState(0)

// useEffect(() => {
// const timer = setTimeout(() => {
//   setIndex((a)=>(a+1)%lights.length)
// },lights[index].duration)
// return ()=>clearTimeout(timer)
// }, [index])
//   return (
//     <div style={{background:"black",width:50,padding:5,marginLeft:700}}>
//       {lights.map((a,b)=>(
//         <div key={a.color}
//         style={{backgroundColor:b===index?a.color:"white",
//           width:50,
//           height:50,
//           borderRadius:"50%",
//           paddingBottom:5,}}/>
//       ))}

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handelClick =(index)=>{
// if(isReversing)return
// if(activeBoxes.includes(index))return
// const update=[...activeBoxes,index]
// setActiveBoxes(update)

// if  (index===totalBoxes-1){
//   startReverse(update)
// }
//   }
//   const startReverse=(a)=>{
//     setIsReversing(true)
//     let stack=[...a]
//   const interval=setInterval(()=>{
//     stack.shift()
//     setActiveBoxes([...stack])
//     if(stack.length===0){
//       clearInterval(interval)
//       setIsReversing(false)
//     }
//   },300)  
//   }
//   const containerStyle={
//     display:"flex",
//     width:"fit-content",
//     gap:"20px",
//     border:"5px solid black"
//   }

//   const boxstyle={
//     width:"50px",
//     height:"50px"
//   }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxstyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
//       ))}

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=9;
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handelClick=(index)=>{
//     if(isReversing)return
//     if(activeBoxes.includes(index))return

//   const update=[...activeBoxes,index]
//   setActiveBoxes(update)

//   if(index===totalBoxes-1){
//     startReverse(update)


//   }
//   }
// const startReverse = (a)=>{
//   setIsReversing(true)
//   let stack =[...a]
// const interval =setInterval(()=>{
//   stack.pop()
//   setActiveBoxes([...stack])
//   if(stack.length===0){
//     clearInterval(interval)
//     setIsReversing(false)
//   }
// },300)  
// }  
// const containerStyle={
//   display:"flex",
//   width:"fit-content",
//   gap:"20px",
//   border:"5px solid black"
// }
// const boxStyle={
//   width:"50px",
//   height:"50px"
// }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div
//         key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
//       ))}

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handelClick=(index)=>{
//     if(isReversing)return;
//     if(activeBoxes.includes(index))return

//   const update=[...activeBoxes,index]
//     setActiveBoxes(update)

//     if(index===totalBoxes-1){
//       startReverse(update)
//     }
//   }

// const startReverse=(a)=>{
//   setIsReversing(true)
// let stack=[...a]

// const interval=setInterval(() => {
//   stack.pop()
//   setActiveBoxes([...stack])
//   if(stack.length===0){
//     clearInterval(interval)
//     setIsReversing(false)
//   }
// }, 300)}  
// const containerStyle={
//   display:"flex",
//   width:"fit-content",
//   gap:"50px",
//   border:"5px solid black"
// }
// const boxstyle={
//   width:"50px",
//   height:"50px"
// }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div
//         key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxstyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}
//       />
//       ))}

//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10;
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

// const handelClick=(index)=>{
//   if(isReversing)return;
//   if(activeBoxes.includes(index))return

// const update=[...activeBoxes,index]
// setActiveBoxes(update)  

// if(index===totalBoxes-1){
//   startReverse(update)
// }
// }
// const startReverse =(a)=>{
//   setIsReversing(true)
//   let stack=[...a]

// const interval=setInterval(()=>{
//   stack.pop()
//   setActiveBoxes([...stack])
//   if(stack.length===0){
//     clearInterval(interval)
//     setIsReversing(false)
//   }
// },300)  
// }
// const containerStyle={
//   display:"flex",
//   width:"fit-content",
//   gap:"50px",
//   border:"5px solid black"
// }
// const boxStyle={
//   width:"50px",
//   height:"50px"
// }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
//       ))}

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes = 10;
//   const [activeBoxes, setActiveBoxes] = useState([])
//   const [isReversing, setIsReversing] = useState(false)

//   const handelClick = (index) => {
//     if (isReversing) return
//     if (activeBoxes.includes(index)) return
//   const update = [...activeBoxes, index]
//     setActiveBoxes(update)

//     if(index===totalBoxes-1){
//       startReverse(update)
//     }}
//   const startReverse=(a)=>{
//     setIsReversing(true)
//     let stack=[...a]
//   const interval=setInterval(()=>{
//     stack.shift()
//     setActiveBoxes([...stack])
//     if(stack.lenght===0){
//       clearInterval(interval)
//       setIsReversing(false)
//     } 
//   },300) 
//   }
//   const container={
//     display:"flex",
//     width:"fit content",
//     gap:"50px",
//     border:"5px solid black"
//   }
//   const boxStyle={
//     width:"50px",
//     height:"50px"
//   }
//     return (
//       <div style={container}>
//         {Array.from({length:totalBoxes}).map((_,index)=>(
//           <div key={index}
//           onClick={()=>handelClick(index)}
//           style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
//         ))}

//       </div>
//     )
//   }

//   export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10;
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handelClick=(index)=>{
//     if(isReversing)return
//     if(activeBoxes.includes(index))return
//   const update=[...activeBoxes,index]
//   setActiveBoxes(update)
//   if(index===totalBoxes-1){
//     startReverse(update)
//   }  
//   }
//   const startReverse=(a)=>{
//     setIsReversing(true)
//     let stack=[...a]
// const Interval=setInterval(() => {
//   stack.shift()
//   setActiveBoxes([...stack])
//   if(stack.length===0){
//     clearInterval(Interval)
//     setIsReversing(false)
//   }
  
// },300)
// }
// const containerStyle={
//   display:"flex",
//   width:"fit-content",
//   gap:"50px",
//   border:"5px solid black"
// }
// const boxStyle={
//   width:"50px",
//   height:"50px"
// }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div key={index}
//         onClick={()=>handelClick(index)}

//         style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
//       ))}
      
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handelClick=(index)=>{
//     if(isReversing)return
//     if(activeBoxes.includes(index))return
//   const update=[...activeBoxes,index]
//   setActiveBoxes(update) 
//   if(index===totalBoxes-1){
//     startReverse(update)
//   } 
//   }
//   const startReverse=(a)=>{
//   setIsReversing(true)
//   let stack=[...a]
//   const interval=setInterval(()=>{
//     stack.pop()
//     setActiveBoxes([...stack])
//     if(stack.length===0){
//       clearInterval(interval)
//       setIsReversing(false)
//     }
//   },300)
//   }
//   const container = {
//     display:"flex",
//     width:"fit-content",
//     border:" 5px solid black",
//     gap:"20px"
//   }
//   const boxStyle={
//     width:"50px",
//     height:"50px"
//   }

//   return (
//     <div style={container}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div key={index}
//         onClick={()=>handelClick(index)}
//         style={{...boxStyle,backgroundColor:activeBoxes.includes(index)?"red":"white"}}/>
//       ))}
      
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const lights=[
//   {color:"red",duration:4000},
//   {color:"yellow",duration:3000},
//   {color:"green",duration:2000},
// ]
// const App = () => {
//   const [index,setIndex]=useState(0)
//   useEffect(() => {
//   let timer =setTimeout(()=>{
//     setIndex((a)=>(a+1)%lights.length)
//   },lights[index].duration)
//   return()=>clearTimeout(timer)
//   }, [index])
//   return (
//     <div style={{background:"black",width:50,padding:5,marginLeft:700}}>
//       {lights.map((a,b)=>(
//         <div key={a.color}
//         style={{backgroundColor:b===index?a.color:"white",
//           width:50,
//           height:50,
//           borderRadius:"50%",
//           marginBottom:5
//         }}/>
//       ))}
      
//     </div>
//   )
// }

// export default App
