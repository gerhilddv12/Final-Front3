import React from 'react'
import Form from '../Components/Form'
import {useClinicContext} from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useClinicContext();
  return (
    <div className={state.dark ? 'dark' : 'light'}>
      <h2 style={{paddingTop: '45px'}}>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact