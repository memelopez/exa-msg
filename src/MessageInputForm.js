import React from 'react';
import PropTypes from 'prop-types';

const MessageInputForm = props => 
    <form onSubmit={props.newMessageSubmitHandler} className="messageInputForm" >
        <input 
            type="text"
            onChange={props.handleMessageInput}
            value={props.value} 
            placeholder="Esciba un mensaje..." />
        <button type="submit" name="submit" value="submit">Send</button>
    </form>;

MessageInputForm.propTypes = {
    value: PropTypes.string.isRequired,
    handleMessageInput: PropTypes.func.isRequired,
    newMessageSubmitHandler: PropTypes.func.isRequired
}

export default MessageInputForm;