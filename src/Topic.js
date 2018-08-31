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
        <MessageInputForm/>
    </li>;

Topic.propTypes = {
    topicName: PropTypes.string.isRequired,
    topicAuthor: PropTypes.string.isRequired,
    messageList: PropTypes.array.isRequired
};

export default Topic;