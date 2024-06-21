import React from 'react'
import Card from '../Components/Card'
import {useClinicContext} from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useClinicContext();
  const { axios: patients } = state;

  return (
    <main className={state.dark ? 'dark' : 'light'} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {patients.map(patient => (
          <Card key={patient.id} patient={patient} />
        ))}
        {/* {Map con card con info.} */}
      </div>
    </main>
  )
}

export default Home