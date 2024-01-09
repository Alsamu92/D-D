import"./CardPersonaje.css"
export const CardPersonaje=({name,img,selected,surname})=>{


   return(
   <figure
   className="figurePers"
  
   key={name}
 >
   <img src={img} alt={name}  onClick={selected} />
   <h2>{name} {surname}</h2>
 </figure>)
}
