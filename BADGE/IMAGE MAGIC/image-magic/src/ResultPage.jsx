import React from 'react'
import { useLocation } from 'react-router-dom'

const ResultPage = () => {
    const {state}=useLocation()
    const sum =state?.sum||0
  return (
    <div>
      <h2>Result</h2>
      <div>
        {Array.from({length:sum}).map((_,index)=>(
            <img 
            key={index}
            src="src/assets/p9.jpg"
            alt="result"
            style={{width:50,marginRight:5}}

            
            
            />
        ))}
      </div>
    </div>
  )
}

export default ResultPage
