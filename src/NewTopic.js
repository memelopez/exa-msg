import React from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    FormGroup, 
    FormControl,
    Col,
    ControlLabel,
    Button
 } from 'react-bootstrap';


const NewTopic = props => 
    <div >
        <Form horizontal onSubmit={props.newTopicSubmitHandler}>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Topic name
                </Col>
                <Col sm={10}>
                <FormControl 
                    type="text" 
                    placeholder="name"
                    value={props.valueNewTopicName}
                    onChange={props.handleNewTopicNameInput} />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                Autor del topic
                </Col>
                <Col sm={10}>
                <FormControl 
                    type="text" 
                    placeholder="autor"
                    value={props.valueNewTopicAuthor}
                    onChange={props.handleNewTopicAuthorInput} />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                <Button type="submit">Crear</Button>
                </Col>
            </FormGroup>
</Form>
    </div>;

NewTopic.propTypes = {
    valueNewTopicName: PropTypes.string.isRequired,
    valueNewTopicAuthor: PropTypes.string.isRequired,
    handleNewTopicNameInput: PropTypes.func.isRequired,
    handleNewTopicAuthorInput: PropTypes.func.isRequired,
    newTopicSubmitHandler: PropTypes.func.isRequired
}

export default NewTopic;