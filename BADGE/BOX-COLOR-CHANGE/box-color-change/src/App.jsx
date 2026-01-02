// import React, { useState } from "react";

// const App = () => {
//   const totalBoxes = 10;
//   const [activeBoxes, setActiveBoxes] = useState([]);
//   const [isReversing, setIsReversing] = useState(false);

//   const handleClick = (index) => {
//     if (isReversing) return;
//     if (activeBoxes.includes(index)) return;

//     const updated = [...activeBoxes, index];
//     setActiveBoxes(updated);

//     // If last box is clicked, start reverse animation
//     if (index === totalBoxes - 1) {
//       startReverse(updated);
//     }
//   };

//   const startReverse = (boxes) => {
//     setIsReversing(true);
//     let stack = [...boxes];

//     const interval = setInterval(() => {
//       stack.pop();
//       setActiveBoxes([...stack]);

//       if (stack.length === 0) {
//         clearInterval(interval);
//         setIsReversing(false);
//       }
//     }, 200);
//   };

//   const containerStyle = {
//     display: "flex",
//     gap: "10px",
//     border: "2px solid black",
//     padding: "20px",
//     width: "fit-content",
//   };

//   const boxStyle = {
//     width: "50px",
//     height: "50px",
    
//   };

//   return (
//     <div style={containerStyle}>
//       {Array.from({ length: totalBoxes }).map((_, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             ...boxStyle,
//             backgroundColor: activeBoxes.includes(index)
//               ? "red"
//               : "white",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
  
// import React, { useState } from 'react'

// const App = () => {
//   const totalBoxes=10
//   const [activeBoxes,setActiveBoxes]=useState([])
//   const [isReversing,setIsReversing]=useState(false)

//   const handleClick=(index)=>{
//     if(isReversing)return;
//     if(activeBoxes.includes(index))return

//     const updated=[...activeBoxes,index]
//     setActiveBoxes(updated)

//     if(index===totalBoxes-1){
//       startReverse(updated)
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
//     gap:"10px",
//     border:"2px solid black",
//     padding:"20px",
//     width:"fix-content"
//   }
//   const boxStyle={
//     width:"50px",
//     height:"50px"
//   }
//   return (
//     <div style={containerStyle}>
//       {Array.from({length:totalBoxes}).map((_,index)=>(
//         <div
//         key={index}
//         onClick={()=>handleClick(index)}
//         style={{...boxStyle,backgroundColor:activeBoxes.includes(index)
//           ?"red":"white"
//         }}/>
//       ))}
      
//     </div>
//   )
// }

// export default App


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


