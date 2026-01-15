 
import InputPage from './InputPage'
import ResultPage from './ResultPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<InputPage/>}/>
      <Route path='/result'element={<ResultPage/>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
