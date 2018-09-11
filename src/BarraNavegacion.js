import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BarraNavegacion = props => 
    <header> 
    <h1 className="name"><NavLink exact to="/" >Mensajería atrasada</NavLink></h1>
    <ul className="main-nav">
        <li><NavLink exact to="/" >Home</NavLink></li>
        <li><NavLink to="/register">Regsiter</NavLink></li>
        <li><NavLink to="/logIn">Log In</NavLink></li>
	</ul>
    </header>;

export default BarraNavegacion;