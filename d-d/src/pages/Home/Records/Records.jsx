import React, { useEffect, useState } from "react";
import "./Records.css";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { getRecords } from "../../../services/record.service";

export const Records = () => {
  const [todosRecords, setTodosRecords] = useState([]);
  const { setGaleriaItems, dataPag, ComponentPaginacion } = usePaginacion(5);
  const [valor, setValor] = useState(null);
  const [valorJugador, setValorJugador] = useState(null);
  const sacarRecords = async () => {
    const recordsArray = await getRecords("oro");
    const soloMejores = recordsArray?.data;
    setGaleriaItems(soloMejores);
    setTodosRecords(soloMejores);

    console.log(valor);
  };
  useEffect(() => {
    sacarRecords();
  }, []);

  const actFiltroPers = () => {
    const filteredItems = todosRecords.filter((item) => {
      return item.personaje.includes(valor);
    });
    valor!="Todos"? setGaleriaItems(filteredItems) : setGaleriaItems(todosRecords);
  };
  useEffect(() => {
    console.log(valor)
    actFiltroPers();
  }, [valor]);
  const actFiltroJugador = () => {
    const filteredItems = todosRecords.filter((item) => {
      return item.jugadorName[0].includes(valorJugador);
    });
    valorJugador!=""? setGaleriaItems(filteredItems) : setGaleriaItems(todosRecords);
  };
  useEffect(() => {
   console.log(valorJugador)
    actFiltroJugador();
  }, [valorJugador]);

  return (
    <div className="todoRecord">
    

      <div className="contenedorRecords">
      <select className="personajesSelect" onChange={(e) => setValor(e.target.value)}>
        <option value={null}>Todos</option>
        <option value="Lirena">Lirena</option>
        <option value="Bruster">Bruster</option>
        <option value="Krista">Krista</option>
        <option value="Furtur">Furtur</option>
        <option value="Darion">Darion</option>
      </select>
        <table className="tablaRecords">
          <thead className="headerRecords">
            <tr>
              <td>Jugador</td>
              <td>Pers</td>
              <td>Exp</td>
            </tr>
          </thead>

          {todosRecords &&
            dataPag?.map((record) => (
              <tr className="contenedorRecord">
     <td onClick={() => setValorJugador(record.jugadorName)}>{record.jugadorName}</td>                <td>{record?.personaje}</td>
                <td>{record?.oro}</td>
              </tr>
            ))
            }
            <p className="ver">*Click en cada jugador para ver sus récords</p>
        </table>
        <div className="paginRec">
          <ComponentPaginacion />
        </div>
      </div>
    </div>
  );
};
