import React from 'react';
import PropTypes from 'prop-types';

const MessageInputForm = props => 
    <form className="messageInputForm" >
        <input 
            type="text" />
        <button type="submit" name="submit" value="submit">Send</button>
    </form>;

MessageInputForm.propTypes = {
}

export default MessageInputForm;