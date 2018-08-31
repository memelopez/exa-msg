import React from 'react';
import PropTypes from 'prop-types';

const BarraNavegacion = props => 
    <header> 
    <h1 className="name"><a href="#">Mensajería atrasada</a></h1>
    <ul className="main-nav">
        <li><a href="#">mensajes</a></li>
        <li><a href="#">login</a></li>
        <li><a href="#">register</a></li>
	</ul>
    </header>;

export default BarraNavegacion;