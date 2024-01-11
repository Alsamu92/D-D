import"./CardPersonaje.css"
export const CardPersonaje=({name,img,selected,surname,confirmed})=>{


   return(
   <figure onClick={selected}
   className="figurePers"
  
   key={name}
 >
   <img src={img} alt={name}   />
   <h2 className="nombrePj">{name} {surname}</h2>
  
            <button onClick={confirmed}>Elegir</button>
 </figure>)
}
