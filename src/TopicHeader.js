import React from 'react';
import PropTypes from 'prop-types';

const TopicHeader = props => 
    <div className="topicHeader" >
      <span className="topicAuthor" >{props.topicAuthor}</span>
      <span className="topicName" >{props.topicName}</span>  
    </div>;

TopicHeader.propTypes = {
    topicName: PropTypes.string.isRequired,
    topicAuthor: PropTypes.string.isRequired
};

export default TopicHeader;