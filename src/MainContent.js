import React from 'react';
import PropTypes from 'prop-types';

import BarraHerramientas from './BarraHerramientas';
import TopicList from './TopicList';


const MainContent = props => 
    <div className="mainContent">
        <BarraHerramientas/>
        <TopicList
            topics={props.topics} />
    </div>;

MainContent.propTypes = {
    topics: PropTypes.array.isRequired
} 

export default MainContent;