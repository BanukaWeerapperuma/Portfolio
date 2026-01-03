import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const phoneNumber = "+94763336479";
const message = "Hello, I’m interested in your service. Please share more information.";

const Navbar = () => {
  return (

    
    <nav className="flex items-center justify-between py-6">
        <div className="flex shrink-0 items-center">
          <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          
          <a href="https://www.linkedin.com/in/banukaweerapperuma/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
            <FaLinkedin/>
          </a>

           <a href="https://github.com/BanukaWeerapperuma"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
            <FaGithub/>
          </a>

           <a href="https://www.instagram.com/banuka_eranda/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
            <FaInstagram/>
          </a>

         <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp">
          <FaWhatsapp />
          </a>


        </div>
        
    </nav>
  )
}

export default Navbar