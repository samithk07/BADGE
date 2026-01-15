import {useState,useEffect}from "react"
const lights=[
  {color:"red",duration:4000},
  {color:"yellow",duration:3000},
  {color:"green",duration:2000},
  ];
  function App(){
    const [index,setIndex]=useState(0);
    
    useEffect(()=>{
      const timer=setTimeout(()=>{
      setIndex((a)=>(a+1)%lights.length)
      },lights[index].duration)
    return()=>clearTimeout(timer)
    },[index])
    
    return(
      <>
        <div style={{background:"black",width:55,padding:5,marginLeft:700}}>
          {lights.map((a,b)=>(
          <div key={a.color}
          style={{
            backgroundColor:b===index ? a.color:"white",
            width:50,
            height:50,
            borderRadius:"50%",
            
          
          }}
            
          />
          
          ))}
          
        </div>
      </>
      
      )   
  }
  export default App



