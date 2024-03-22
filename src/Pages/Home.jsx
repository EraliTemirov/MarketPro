// import React from 'react';
import {Link} from "react-router-dom";
import Header from "../Components/Header";
import SectionOne from "../Components/SectionOne";
function Home() {
  return (
    <div>
      <Header/>
      <SectionOne/>
      Home


      <Link to="/about"> Aboutga otish</Link>
      
    </div>
  )
}

export default Home
