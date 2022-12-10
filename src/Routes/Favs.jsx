import axios from "axios";
import React, {useEffect} from 'react'
import {useState} from 'react'
import Card from "../Components/Card";
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import { useContextGlobalContext } from "../Components/utils/global.context";


const Favs = () => {
  const {theme} = useContextGlobalContext();

  
  // useEffect(() => {
   const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    // console.log(favs[0].id);
    
  // }, [favs]);

  

  return (
    <main className={theme} >
      <Navbar/>    
        <h1>Dentist Fav</h1>
        <div className='card-grid'>
          {favs.map( fav => (
            <Card 
              key={fav.id}
              name={fav.name} 
              username={fav.username}
              id={fav.id}
            />
            ))}
        </div>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Favs