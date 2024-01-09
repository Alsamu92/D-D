import"./CardPersonajeRev.css"
export const CardPersonajeRev=({name,surname,volver,descripcion,fuerza,inteligencia,sigilo,carisma,confirmed})=>{


   return(<figure className="persDetallado">
    <h2>{name} {surname}</h2>
          <p>{descripcion}</p>
          <div className="">Estadísticas</div>
        <p><strong>Fuerza</strong>:{fuerza}</p>  
         <p><strong>Inteligencia</strong>:{inteligencia}</p> 
          <p><strong>Sigilo</strong>:{sigilo}</p>
         <p><strong>Carisma</strong>:{carisma}</p> 
          <div className="botonesElegir">
            <button onClick={()=>volver(null)}>Volver</button>
            <button onClick={confirmed}>Elegir</button>
          </div>
        </figure>)
}

