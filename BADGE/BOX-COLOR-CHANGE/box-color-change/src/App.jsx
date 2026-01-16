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
//  const container={

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


// import React, { useState } from "react";

// const App = () => {
//   const total = 10;
//   const [active, setActive] = useState([]);
//   const [locking, setLocking] = useState(false);

//   const handleClick = (index) => {
//     if (locking) return;                 
//     if (active.includes(index)) return; 
//     const updated = [...active, index];
//     setActive(updated);

//     if (index === total - 1) {
//       reverseBoxes(updated);
//     }
//   };

//   const reverseBoxes = (list) => {
//     setLocking(true);
//     let temp = [...list];

//     const timer = setInterval(() => {
//       temp.shift();              
//       setActive([...temp]);      

//       if (temp.length === 0) {
//         clearInterval(timer);
//         setLocking(false);
//       }
//     }, 300);
//   };

//   const containerStyle = {
//     display: "flex",
//     gap: "20px",
//     border: "2px solid black",
   
//     width: "fit-content"
//   };

//   const boxStyle = {
//     width: "60px",
//     height: "60px",
  
//   };

//   return (
//     <div style={containerStyle}>
//       {Array.from({ length: total }).map((_, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             ...boxStyle,
//             backgroundColor: active.includes(index) ? "red" : "white"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from "react";

// const App = () => {
//   const totalBox = 10;
//   const [activeBoxes, setActiveBoxes] = useState([]);
//   const [locking, setLocking] = useState(false);

//   const handleClick = (index) => {
//     if (locking) return;
//     if (activeBoxes.includes(index)) return;

//     const updated = [...activeBoxes, index];
//     setActiveBoxes(updated);

//     if (index === totalBox - 1) {
//       reverseBoxes(updated);
//     }
//   };

//   const reverseBoxes = (arr) => {
//     setLocking(true);
//     let stack = [...arr];

//     const timer = setInterval(() => {
//       stack.shift();
//       setActiveBoxes([...stack]);

//       if (stack.length === 0) {
//         clearInterval(timer);
//         setLocking(false);
//       }
//     }, 300);
//   };

//   const container = {
//     display: "flex",
//     width: "fit-content",
//     gap: "50px",
//     border: "5px solid black",
//     padding: "10px"
//   };

//   const smallBox = {
//     width: "50px",
//     height: "50px",
//     border: "1px solid black",
//     cursor: "pointer"
//   };

//   return (
//     <div style={container}>
//       {Array.from({ length: totalBox }).map((_, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             ...smallBox,
//             backgroundColor: activeBoxes.includes(index) ? "red" : "white"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     const totalBox=10
//     const [active,setActive]=useState([])
//     const [locking,setLocking]=useState(false)

//     const handleClick=(index)=>{
//         if(locking)return
//         if(active.includes(index))return
//             const update=[...active,index]
//             setActive(update)
//             if(index===totalBox-1){
//             setReverse(update)
//             }
            
        
//         const setReverse=(a)=>{
//             setLocking(true)
//             let stack=[...a]
//         const timer=setInterval(()=>{
//             stack.pop()
//             if(stack.length===0){
//                 clearInterval(timer)
//                 setLocking(flase)
//             }
//         },300)    
//         }
//     }
//     const bigBox={
//         display:"flex",
//         width:"fit-content",
//         border:"5px solid black",
//         gap:"50px"
//     }
//     const smallbox={
//         width:"50px",
//         height:"50px"
//     }
//   return (
//     <div style={bigBox}>
//         {Array.from({length:totalBox}).map((_,index)=>(
//             <div key={index}
//             onClick={()=>handleClick(index)}
//             style={{...smallbox,backgroundColor:active.includes(index)?"red":"white"}}
//             />
//         ))}
      
//     </div>
//   )
// }

// export default App




// import {useState} from "react"

// const App =()=>{
//   const  totalBox=4
//     const [active,setActive]=useState([])
//     const [locking,setLocking]=useState(false)

//     const handleClick=(index)=>{
//         if(locking)return
//         if(active.includes(index))return
//         const update=[...active,index]
//         setActive(update)
//         if(index===totalBox-1){
//             reverseSet(update)
//         }
//     }
//     const reverseSet=(a)=>{
//         setLocking(true)
//         let stack=[...a]
//     const timer=setInterval(()=>{
//         stack.pop()
//        setActive([...stack])
//         if(stack.length===0){
//           clearInterval(timer)  
//             setLocking(false)
//         }
//     },300)
//     }
//     const container ={
//         display:"flex",
//         gap:"50px",
//         width:"fit-content"
//     }
//     const boxStyle={
//         width:"50px",
//         height:"50px",
//     }
//     return(
//         <>
//             <div style={container}>
//                 {Array.from({length:totalBox}).map((_,index)=>(
//             <div key={index}
//                 onClick={()=>handleClick(index)}
//                 style={{...boxStyle,backgroundColor:active.includes(index)?"red":"white"}}
//                 />
//                 ))}
//             </div>
        
//         </>
//     )
// }
// export default App


import {useState} from "react"

const App =()=>{
const [text,setText]=useState("")
 const [list,setList]=useState([])
 const [deleteditem,setDeletedItem]=useState([ ])   
    const handelAdd=()=>{
        if(text.trim()==="")return
        setList([...list,{id:Date.now(),text}])
        setText("")
    }
    const handleDelete=(id)=>{
        const deletedTodo=list.find((a)=>a.id===id)
        if(deletedTodo){
            setDeletedItem([...deleteditem,deletedTodo])
        }
        setList(list.filter((a)=>a.id!==id))
    } 
    const handleUndo=(id)=>{
        const undoItem=deleteditem.find((a)=>a.id===id)
        if(undoItem){
            setList([...list,undoItem])
        }
        setDeletedItem(deleteditem.filter((a)=>a.id!==id))
    }
    return(
        <>
           <h3>TODO LIST</h3>
            <input
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
            <button onClick={handelAdd}>ADD</button>
            <ul>
                {list.map((item)=>(
                <li key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </li>
            
                ))}
            </ul>
            <h3>DELTED TODO LIST</h3>

            <ul>
                {deleteditem.map((item)=>(
            <li key={item.id}>{item.text}
            <button onClick={()=>handleUndo(item.id)}>UNDO</button>
            </li>
                ))}
            </ul>
            
                
        
        </>
    )
}
export default App