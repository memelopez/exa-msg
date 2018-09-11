import React from 'react';
import PropTypes from 'prop-types';

import Topic from './Topic';

const TopicList = props =>
        <ul className="topicList">
            {props.topics
                .map((topic) =>
                    <Topic
                        key={topic.idTopic}
                        topicName={topic.topicName}
                        topicAuthor={topic.topicAuthor}

                        messageList={topic.mensajes} 

                        elmeroTexto = {topic.elmeroTexto}
                        handleMessageInput={text => props.handleMessageInputAt(text, topic.idTopic)}
                        newMessageSubmitHandler={e => props.newMessageSubmitHandlerAt(e, topic.idTopic)} />
                )}
        </ul>;

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
    // messageinputform
    handleMessageInputAt: PropTypes.func.isRequired,
    newMessageSubmitHandlerAt: PropTypes.func.isRequired
};

export default TopicList;