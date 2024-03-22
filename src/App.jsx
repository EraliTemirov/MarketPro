import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import More from "./Pages/More";


function App() {
  return (
    <div>
      <Routes>
           <Route  path="/" element={<Home/>} />
           <Route path="/about" element={<About/>}/>
           <Route path="/:productId" element={<More/>}/>
      </Routes>
    </div>
  )
}

export default App
