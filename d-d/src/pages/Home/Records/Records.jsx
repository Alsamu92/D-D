import React, { useEffect, useState } from 'react';
import "./Records.css";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { getRecords } from '../../../services/record.service';

export const Records = () => {
    const[todosRecords,setTodosRecords]=useState([])
    const { setGaleriaItems, dataPag, ComponentPaginacion } = usePaginacion(8);
const sacarRecords=async()=>{
    const recordsArray=await getRecords("oro")
    const soloMejores=recordsArray?.data
    setGaleriaItems(soloMejores)
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
          <td>Pers</td>
          <td>Exp</td>
        
        </tr>
      </thead>
      
        {todosRecords && dataPag?.map((record)=>(
<tr className='contenedorRecord'>
    <td>{record?.jugadorName}</td>
    <td>{record?.personaje}</td>
    <td>{record?.oro}</td>
   
</tr>
        ))}

        </table>
        <div className="paginRec">
             <ComponentPaginacion />
        </div>
     
       </div>
    );
};
