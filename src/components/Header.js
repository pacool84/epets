import React, { useState } from 'react';
import Modal from './Modal';
import Calendly from './Calendly';
import '../assets/styles/Header.css';
import Logo from '../assets/static/epetslogo.png';
import cookieIcon from '../assets/static/cookieIcon.png';
import petToy from '../assets/static/pettoy.png';
import dogFood from '../assets/static/dogfood.png';
import clothes from '../assets/static/tshirt.png';
import stetic from '../assets/static/stetic.png';
import medic from '../assets/static/consulta.png';
import bordContact from '../assets/static/birdcontact.png';
import registerIcon from '../assets/static/sign.png';
import loginIcon from '../assets/static/loginIcon.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [modal, setModal] = useState({open: false, calendlyType: ''});

  return (
    <>
      <header className='Header'>
        <Link to='/'>
          <img className='logo' src={Logo} />
        </Link>
        <nav>
          <ul className='nav-links'>
            <li>
              <Link to='/section/toys'>
                <img src={petToy} className='header-icon'></img>
                <span>Juguetes</span>
              </Link>
            </li>
            <li>
              <Link to='/section/food'>
                <img src={dogFood} className='header-icon'></img>
                <span>Comida</span>
              </Link>
            </li>
            <li>
              <Link to='/section/clothes'>
                <img src={clothes} className='header-icon'></img>
                <span>Ropa</span>
              </Link>
            </li>
            <li onClick={()=>{setModal({open: true, calendlyType: 'estetica'})}}>
                <img src={stetic} className='header-icon'></img>
                <span>Estética</span>
            </li>
            <li onClick={()=>{setModal({open: true, calendlyType: 'consulta'})}}>
              <img src={medic} className='header-icon'></img>
              <span>Consulta Medica</span>
            </li>
            <li>
              <a
                href='mailto:epets@animals.world.com?Subject=Hola%20Amigos%20de%20Epets!'
                target='_blank'
              >
              <img src={bordContact} className='header-icon'></img>
                Contactanos
              </a>
            </li>

            <li>
              <Link to="/register">
                <img src={registerIcon} className='header-icon'></img>
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">
                <img src={loginIcon} className='header-icon'></img>
                Login
              </Link>
            </li>

          </ul>
        </nav>
        <img src={cookieIcon} className='cookie-menu'></img>
      </header>
      <Modal isOpen={modal.open} onClose={()=>{setModal(false)}}>
        <Calendly type={modal.calendlyType} />
      </Modal>
    </>
  );
};

export default Header;
