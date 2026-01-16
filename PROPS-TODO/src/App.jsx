import React from 'react'
import { useState } from 'react'
const App = () => {
  const [text,setText]=useState("")
  const [list,setList]=useState([])
  const [deletedItem,setDeletedItem]=useState([])

  const handleAdd=()=>{
    if(text.trim()==="")return
    setList([...list,{id:Date.now(),text}])
    setText("")
  }
  const handleDelete=(id)=>{
      const removeItem=list.find((a)=>a.id===id)
      if(removeItem){
        setDeletedItem([...deletedItem,removeItem])
      }
      setList(list.filter((a)=>a.id!==id))
  }
  const handleUndo=(id)=>{
      const undoItem=deletedItem.find((a)=>a.id===id)
      if(undoItem){
       setList([...list,undoItem])
      }
      setDeletedItem(deletedItem.filter((a)=>a.id!==id))
  }
  return (
    <>
    <input
    value={text}
    type="text"
    onChange={(e)=>setText(e.target.value)}/>
    <button onClick={handleAdd}>ADD</button>
    <ul>
      {list.map((a)=>(
        <li key={a.id}>
          <span>{a.text}</span>
          <button onClick={()=>handleDelete(a.id)}>DELETE</button>

        </li>
      ))}
    </ul>
    <ul>
      <h3>DLETED TODO</h3>
      {deletedItem.map((a)=>(
        <li key={a.id}>{a.text}
         <button onClick={()=>handleUndo(a.id)}>UNDO</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
