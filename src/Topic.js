import React from 'react';
import PropTypes from 'prop-types';

import TopicHeader from './TopicHeader';
import Messagelist from './MessageList';
import MessageInputForm from './MessageInputForm';

const Topic = props => 
    <li className="topicCard" >
        <TopicHeader
            topicName={props.topicName}
            topicAuthor={props.topicAuthor} />
        <Messagelist
            mensajes={props.messageList} />
        <MessageInputForm 
            value={props.elmeroTexto}
            handleMessageInput={e => props.handleMessageInput(e.target.value)}
            newMessageSubmitHandler={e => props.newMessageSubmitHandler(e)} />
    </li>;

Topic.propTypes = {
    // header
    topicName: PropTypes.string.isRequired,
    topicAuthor: PropTypes.string.isRequired,
    messageList: PropTypes.array.isRequired,
    // messagelist
    // messageinputform
    elmeroTexto: PropTypes.string.isRequired,
    handleMessageInput: PropTypes.func.isRequired,
    newMessageSubmitHandler: PropTypes.func.isRequired
};

export default Topic;