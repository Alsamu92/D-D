import "./CardPersonaje.css";
export const CardPersonaje = ({ confirmed, selected }) => {
  return (
    <>
      <figure  className="figurePers" key={selected.name}>
        <img src={selected.img} alt={selected.name} />
        <h2>
          {selected.name} {selected.surname}
        </h2>
      </figure>
     <div className="cardTexto">
      <p>{selected.descripcion}</p>
      <div className="cardStats">
        <h2> Estadísticas</h2>
        <p>
          <strong>Fuerza</strong>:{selected.fuerza}
        </p>
        <p>
          <strong>Sabiduría</strong>:{selected.sabiduria}
        </p>
        <p>
          <strong>Sigilo</strong>:{selected.sigilo}
        </p>
        <p>
          <strong>Carisma</strong>:{selected.carisma}
        </p>
        <p>
          <strong>Destreza</strong>:{selected.destreza}
        </p>
      </div>
     </div>
     
      <button className="elegirButton"onClick={confirmed}>Elegir</button>
    </>
  );
};
