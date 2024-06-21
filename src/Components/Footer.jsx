import '../index.css'
import { useClinicContext } from '../Context/Context'


const Footer = () => {

  const {state} = useClinicContext();
  return (
    <footer className={state.dark? 'dark': 'light'}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
  