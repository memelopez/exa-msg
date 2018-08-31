import React from 'react';
import PropTypes from 'prop-types';

const Message = props =>
    <div className="message" >
        <span>{props.mensaje}</span>
        <span>{props.autor}</span>
    </div>;

Message.propTypes = {
    mensaje: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired
};

export default Message;