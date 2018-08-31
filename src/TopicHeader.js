import React from 'react';
import PropTypes from 'prop-types';

const TopicHeader = props => 
    <div className="topicHeader" >
      <h3 className="topicAuthor" >{props.topicAuthor}</h3>
      <h3>{props.topicName}</h3>  
    </div>;

TopicHeader.propTypes = {
    topicName: PropTypes.string.isRequired,
    topicAuthor: PropTypes.string.isRequired
};

export default TopicHeader;