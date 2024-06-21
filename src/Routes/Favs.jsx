import React from "react";
import Card from "../Components/Card";
import {useClinicContext} from '../Context/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useClinicContext();
  const { favs } = state;

  return (
    <div className={state.dark ? 'dark' : 'light'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favs.map(patient => (
          <Card key={patient.id} patient={patient} />
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}

      </div>
    </div>
  );
};

export default Favs;
