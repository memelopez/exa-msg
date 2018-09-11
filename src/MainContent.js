import React from 'react';
import PropTypes from 'prop-types';

import BarraHerramientas from './BarraHerramientas';
import TopicList from './TopicList';


const MainContent = props => 
    <div className="mainContent">
        <BarraHerramientas/>
        <TopicList
            topics={props.topics}
            handleMessageInputAt= {props.handleMessageInputAt}
            newMessageSubmitHandlerAt={props.newMessageSubmitHandlerAt} />
    </div>;

MainContent.propTypes = {
    topics: PropTypes.array.isRequired,
    handleMessageInputAt: PropTypes.func.isRequired,
    newMessageSubmitHandlerAt: PropTypes.func.isRequired
} 

export default MainContent;