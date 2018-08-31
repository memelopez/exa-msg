import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const MessageInputForm = props => 
    <form className="messageInputForm" >
        <TextField
            id="Mensaje"
            label="Mensaje"
            margin="normal"
            />
        <Button variant="contained" color="primary">
            Send
        </Button>
    </form>;

MessageInputForm.propTypes = {
}

export default MessageInputForm;