import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex items-center bg-indigo-700'>
      <img className='mx-2 h-16' src={logo} alt='Logo React' />
      <ul className='flex'>
        <LinkNavegacion texto='Inicio' ruta='/' />
        <LinkNavegacion texto='Perfil' ruta='/perfil' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
      </ul>
    </nav>
  );
};

const LinkNavegacion = ({ texto, ruta }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive ? 'linkNavegacionActivo' : 'linkNavegacionInactivo';
        }}
        to={ruta}
      >
        {texto}
      </NavLink>
    </li>
  );
};

export default Navbar;
