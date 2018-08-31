import React from 'react';
import PropTypes from 'prop-types';

import Topic from './Topic';

const TopicList = props =>
        <ul className="topicList">
            {props.topics
                .map((topic, id) =>
                    <Topic
                        key={id}
                        topicName={topic.topicName}
                        topicAuthor={topic.topicAuthor}
                        messageList={topic.mensajes} />
                )}
        </ul>;

TopicList.propTypes = {
    topics: PropTypes.array.isRequired
};

export default TopicList;