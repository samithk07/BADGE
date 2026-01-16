import React, { useState } from 'react'
import {useNavigate}from "react-router-dom"

const InputPage = () => {
    const [a,setA]=useState("")
    const[b,setB]=useState("")
    const navigation =useNavigate()
const handleSubmit=()=>{
    const sum=Number(a)+Number(b)
    navigation("/result",{state:{sum}})
}

return (
    <div>
        <input 
        type='number'
        value={a}
        onChange={(a)=>setA(a.target.value)}
        placeholder='Enter first number' />
        <input type='number'
        value={b}
        placeholder='Enter Second number'
        onChange={(a)=>setB(a.target.value)}/>
        <button onClick={handleSubmit}>Show Result</button>
    </div>
  )
}

export default InputPage
