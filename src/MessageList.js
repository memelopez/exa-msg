import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const MessageList = props =>
    <ul className="messageList" >
        {props.mensajes
            .map((mensaje, id) =>
                <Message
                key= {id}
                mensaje={mensaje.mensaje}
                autor={mensaje.autor} />
            )}
    </ul>;

MessageList.propTypes = {
    mensajes: PropTypes.array.isRequired
};

export default MessageList;