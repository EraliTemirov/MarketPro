// import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Header from "../Components/Header";
import SectionOne from "../Components/SectionOne";
import { useEffect } from 'react';
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) navigate("/login");
  }, []);
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
