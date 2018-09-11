import React from 'react';
import PropTypes from 'prop-types';

const Message = props =>
    <div className="message" >
        <span className="messageAuthor" >{props.autor}</span>
        <span className="actualMessage" >{props.mensaje}</span>
    </div>;

Message.propTypes = {
    mensaje: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired
};

export default Message;