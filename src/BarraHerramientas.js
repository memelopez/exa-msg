import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BarraHerramientas = props => 
    <div className="barraHerramientas">
        <label>
            <input 
                type="checkbox" /> Mostar mis tópicos
        </label>
        <Link to="/NewTopic" >Hacer un nuevo TOPIC</Link>
    </div>;

BarraHerramientas.propTypes = {

}

export default BarraHerramientas;