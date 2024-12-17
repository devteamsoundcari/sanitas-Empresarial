import { Form } from '../molecules/Form'
import Logo from '../assets/images/logo_eps_sanitas.png'
import Footer from '../molecules/Footer'
import PrincipalImage from '../assets/images/mainImg.jpg'
import '../styles/SanitasEmpresarial.css'

const SanitasEmpresarial = () => {
  return (
    <div className="container">
      <figure className="logo-cont">
        <img src={Logo} alt="Logo Eps Sanitas" className="logo-eps-sanitas" />
      </figure>
      <figure className="main-img-cont">
        <img
          src={PrincipalImage}
          alt="Personas interactuando con el computador"
          className="main-image"
        />
      </figure>
      <div className="form-container">
        <Form />
        <Footer />
      </div>
    </div>
  )
}

export { SanitasEmpresarial }
