// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])
//   const [edit,setEdit]=useState(null)
//   const [text,setText]=useState("")

//   const handleAdd=()=>{
//     if(text.trim()==="")return

//     if(edit !== null){
//       setTodos(
//         todos.map((a)=>
//           a.id === edit ? {...a,text}:a
//         ))
//         setEdit(null)
//     }else{
//       setTodos([...todos,{id:Date.now(),text}])
//     }
//     setText("")
//   }
//   const handleEdit=(a)=>{
//     setText(a.text)
//     setEdit(a.id)
//   }

//   const handleDelete=(id)=>{
//     setTodos(todos.filter((b)=>b.id!==id))
//   }

//   return ( 
//     <>
//     <h2> Todo List</h2>
//     <input 
//     type='text'
//     value={text}
//     placeholder='Enter a Task'
//     onChange={(e)=>setText(e.target.value)}    
//     />
//     <button onClick={handleAdd}>{edit !==null?"UPDATE":"ADD"}</button>

//     <ul>
//       {todos.map((a)=>(
//         <li key={a.id}>{a.text}
//         <button onClick={()=>handleEdit(a)}>Edit</button>
//         <button onClick={()=>handleDelete(a.id)}>Delete</button>
        
//         </li>
       
//       ))}
//     </ul>
     
//     </>
//   )
// }

// export default App





// import React, { useState } from 'react'

// const App = () => {
//   const [todos,setTodos]=useState([])
//   const [text,setText]=useState("")
//   const [editId,setEditId]=useState(false)

//   const handleAdd=()=>{
//     if(text.trim()==="")return
//     if(editId !== null){
//       setTodos(
//         todos.map((a)=>
//           a.id===editId ? {...a,text}:a
//         ))
//         setEditId(null)
//     }else{
//       setTodos([...todos,{id:Date.now(),text}])
//     }
//     setText("")
//   }
//   const handleEdit=(a)=>{
//     setText(a.text)
//     setEditId(a.id)
//   }
//   const handleDelete=(id)=>{
//     setTodos(todos.filter((b)=>b.id!==id))
//   }
//   return (
//     <div>
      
//       <h1>Todo List</h1>
//       <input type="text"
//       value={text}
//       placeholder='enter today task' 
//       onChange={(e)=>setText(e.target.value)}/>
//       <button onClick={handleAdd}>{editId !==null ?"UPDATE":"ADD"}</button>
//       <ul>
//         {todos.map((a)=>(
//           <li key={a.id}>{a.text}
//           <button onClick={()=>handleEdit(a)}>Edit</button>
//           <button onClick={()=>handleDelete(a.id)}>Delete</button>

          
          
//           </li>
//         ))}
//         </ul>      
//     </div>
//   )
// }

// export default App






