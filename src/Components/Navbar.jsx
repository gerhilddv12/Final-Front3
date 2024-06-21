import { Link } from 'react-router-dom';
import '../index.css';
import {routes} from "./utils/routes";
import { useClinicContext } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useClinicContext();



  return (
    <nav className={state.dark? 'dark' : 'light'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favs</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({type: 'TOGGLE_THEME'})}>🌙</button>
    </nav>
  )
}

export default Navbar