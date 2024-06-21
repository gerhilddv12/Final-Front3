import React from "react";
import { useState } from "react";
import '../Styles/Form.module.css'
const Form = () => {
  
  const [client, setClient] = useState({
    fullName: '',
    email: ''
  });

  const [err, setErr] = useState(false);

  const [successOp, setSuccessOp] = useState(false);

  const handleName = (e) => {
    setClient({...client, fullName: e.target.value})
}

const handleMail = (e) => {
    setClient({...client, email: e.target.value})
}

const handleSubmit = (e) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  e.preventDefault();

  if(
      client.fullName.length >= 5 &&
      regex.test(client.email)
  ){
      setSuccessOp(true)
      setErr(false)
  } else {
      setErr(true)
      setSuccessOp(false)
  }
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" onChange={handleName} value={client.fullName}/>

        <label>Email</label>
        <input type="email" onChange={handleMail} value={client.email}/>

        <button >Enter</button>
      </form>

      {successOp ? ( 
            <>
                <h3>Thanks {client.fullName}!</h3>
                <h3>You will be contacted in a few minutes..</h3>
            </> 
        ) : null}

        {err && (
        <p style={{ color: "red", display: "flex", justifyContent: "center"}}>Something went wrong...</p>
        )}

    </div>
  );
};

export default Form;
