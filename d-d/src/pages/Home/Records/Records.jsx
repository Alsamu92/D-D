import React, { useEffect, useState } from 'react';
import "./Records.css";
import { getRecords } from '../../../services/record.service';

export const Records = () => {
    const[todosRecords,setTodosRecords]=useState([])
const sacarRecords=async()=>{
    const recordsArray=await getRecords("oro")
    const soloMejores=recordsArray?.data?.slice(0,5)
    setTodosRecords(soloMejores)
    

}
useEffect(()=>{
    sacarRecords()
},[])


    return (
       <div className='contenedorRecords'>
        <table className='tablaRecords'>
        
        <thead className='headerRecords'>
        <tr>
          <td>Jugador</td>
          <td>Personaje</td>
          <td>Oro</td>
          <td>Salud</td>
        </tr>
      </thead>
      
        {todosRecords && todosRecords?.map((record)=>(
<tr className='contenedorRecord'>
    <td>{record?.jugadorName}</td>
    <td>{record?.personaje}</td>
    <td>{record?.oro}</td>
    <td>{record?.salud}</td>
</tr>
        ))}

        </table>
      
       </div>
    );
};
