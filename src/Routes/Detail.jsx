import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useClinicContext} from '../Context/Context'
import axios from 'axios';



const Detail = () => {
  const [detail, setDetail] = useState({});
  const params = useParams();
  const {id} = params;

  const {state} = useClinicContext();
  
  const url =`https://jsonplaceholder.typicode.com/users/${id}`;


  useEffect(() => {
  const getDetail = () => {

    axios(url)
        .then((res) => {
          setDetail(res.data);
        }) 

        .catch((err) => console.log(err)); 
  
  };

  getDetail();

  
  }), [id];


  
  


  return (
    <div className={state.dark ? 'dark' : 'light'}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div>
        <h2>ID: {id}</h2>
        
        {/* Name */}
        <h2>Full Name:  {detail.name}</h2> 

        {/* Email */}
        <h2>Email:  {detail.email}</h2> 

        {/* Telefono */}
        <h2>Contact:  {detail.phone}</h2>
        
        {/* Sitio Web */}
        <h2><a>Website:  {detail.website}</a></h2>

      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico ?? MAP W/ LOCALSTORAGE?? */}
    </div>
  )
}

export default Detail