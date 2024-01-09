import "./BarraJugador.css"
export const BarraJugador = ({name,oro,salud,fuerza,inteligencia,sigilo,carisma,img}) => {

  
  return (<>

<div className="divRol">
  <div className="perfil">
    <img src={img} alt={name} />
    <h3>{name}</h3>
  </div>
  <div>
 <p><strong>Salud</strong>:{salud} PS</p>
    <p><strong>Oro</strong>:{oro} monedas</p>
  </div>
  <div className="stats">
    <h2>  Estadísticas</h2>
    <p><strong>Fuerza</strong>:{fuerza}</p>  
         <p><strong>Inteligencia</strong>:{inteligencia}</p> 
          <p><strong>Sigilo</strong>:{sigilo}</p>
         <p><strong>Carisma</strong>:{carisma}</p> 
  </div>
       
    
</div>
    </>
  )
}