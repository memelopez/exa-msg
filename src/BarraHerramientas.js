import React from 'react';
import PropTypes from 'prop-types';

const BarraHerramientas = props => 
    <div className="barraHerramientas">
        <label>
            <input 
                type="checkbox" /> Mostar mis tópicos
        </label>
        <button >Hacer nuevo tópico</button>
    </div>;

BarraHerramientas.propTypes = {

}

export default BarraHerramientas;