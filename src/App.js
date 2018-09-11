 import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// APP COMPONENTS
import BarraNavegacion from './BarraNavegacion'
import MainContent from './MainContent';
import NewTopic from './NewTopic';

class App extends Component {

  state = {

    newTopicName: "",
    newTopicAuthor: "",

    topics: [
      {
        idTopic: 1,
        topicName: 'mensajes de amor',
        topicAuthor: 'Mourinho',
        mensajes: [
          {
            idMensaje: 1,
            mensaje: "quizas despierte mi fuego",
            autor: "elmer"
          },
          {
            idMensaje: 2,
            mensaje: "no entiendo",
            autor: "vinicious jr"
          },
          {
            idMensaje: 3,
            mensaje: "quizas despierte mi fuego",
            autor: "elmer"
          }
        ],
        elmeroTexto: "",
        nextMessageId: 4
      },
      {
        idTopic: 2,
        topicName: 'jugadores del olimpia',
        topicAuthor: 'Ale',
        mensajes: [
          {
            idMensaje: 1,
            mensaje: "wilmer niel velasquez",
            autor: "elmer"
          },
          {
            idMensaje: 2,
            mensaje: "sigo caminando",
            autor: "joyito"
          }
        ],
        elmeroTexto: "",
        nextMessageId: 3
      },
      {
        idTopic: 3,
        topicName: 'cafe',
        topicAuthor: 'oscar nahin',
        mensajes: [
          {
            idMensaje: 1,
            mensaje: "es muy rico el cafe",
            autor: "elmer"
          },
          {
            idMensaje: 2,
            mensaje: "los alacranes en el campo ",
            autor: "oscar"
          },
          {
            idMensaje: 3,
            mensaje: "GGOoooooooooolllllll ",
            autor: "nahin"
          },
          {
            idMensaje: 4,
            mensaje: "hola que tal ",
            autor: "enrique"
          }
        ],
        elmeroTexto: "",
        nextMessageId: 5
      },
      {
        idTopic: 4,
        topicName: 'engines',
        topicAuthor: 'mayra',
        mensajes: [
          {
            idMensaje: 1,
            mensaje: "no se mira tanto",
            autor: "taufic"
          },
          {
            idMensaje: 2,
            mensaje: "docker",
            autor: "ana "
          },
          {
            idMensaje: 3,
            mensaje: "ahi esta",
            autor: "carlos"
          }
        ],
        elmeroTexto: "",
        nextMessageId: 4
      }
    ]
  };
  lastTopicId = 4;

  newTopicId = () => {
    const id = this.lastTopicId +1;
    this.lastTopicId += 1;
    return id;
  };

  newMessageId = (topicId) => { // se setea el nuevo nextMessageId cuando se sea el nuevo message en newMessageSubmitHandlerAt
    let id = 100;
    const topics = this.state.topics;
    console.log("el length de topics en newMessageId: "+topics.length);
    for (let i=0; i< topics.length; i++){
      if (topicId === topics[i].idTopic){
        id = topics[i].nextMessageId;
      }
    }
    return id;
  };

  // message input form
  handleMessageInputAt = (text, topicId) => {
    console.log("este id: "+topicId+" este mensaje: "+text);
    this.setState({
      topics: this.state.topics.map((topic) => {//este topicId no se exactamente como es que lo agarra cuando hace esa funcion de map
        if (topicId === topic.idTopic) {// si encuentra el id igual al de donde se esta escribiendo
          return {
            ...topic,//spread operator
            elmeroTexto: text
          };
        }
        return topic;
      })
    });
  }

  newMessageSubmitHandlerAt = (e, topicId) => {
  e.preventDefault();
// tomar el mensaje de algun topic en el estado
  let mensaje = "";
  const topics = this.state.topics;
  for (let i=0; i< topics.length; i++){
    if (topicId === topics[i].idTopic){
      mensaje = topics[i].elmeroTexto;
    }
  }
  console.log('y el mensaje es: ' + mensaje);
  let id = this.newMessageId(topicId);
  console.log('este es el nuevo id por asignar: '+ id);
  let mensajes;
  for (let i=0; i< topics.length; i++){
    if (topicId === topics[i].idTopic){
      mensajes = topics[i].mensajes;
    }
  }
  console.log('este es el nuevo id por asignar: '+ id);
  for (let i = 0; i < mensajes.length; i++) {
    console.log(mensajes[i].mensaje);    
  }
  mensajes.push({idMensaje: id, mensaje: mensaje, autor: "anónimo"});
  id+=1;//se  suma para poner el nextMessageId en el setState
  // ahora setiar el nuevo mensaje y el 
  this.setState({
    topics: this.state.topics.map((topic) => {//este topicId no se exactamente como es que lo agarra cuando hace esa funcion de map
      if (topicId === topic.idTopic) {// si encuentra el id igual al de donde se esta escribiendo
        return {
          ...topic,//spread operator
          mensajes: mensajes,
          //   [
          //   ...this.state.topics[topicId].mensajes,
          //   {
          //   idMensaje: id,
          //   mensaje: mensaje,
          //   autor: "anónimo"
          //   }
          // ],
          elmeroTexto: "",
          nextMessageId: id
        };
      }
      return topic;
    })
  });
  }

  // newTopicForm
  handleNewTopicNameInput = e => 
    this.setState({ newTopicName: e.target.value });
  
  handleNewTopicAuthorInput = e => 
    this.setState({ newTopicAuthor: e.target.value });

  newTopicSubmitHandler = e => {
    e.preventDefault();
    const name=this.state.newTopicName;
    const author=this.state.newTopicAuthor;
    let topics = this.state.topics;
    const newTopicId= this.newTopicId();
    console.log('este nombre: --> '+name+' y este autor: --> '+author+' para el nuevo topico en newTopicSubmitHandler en app.'+'cantidad topics: '+topics.length+ "y cno esta id: "+newTopicId);
    topics.push(
      {
        idTopic: newTopicId,
        topicName: name,
        topicAuthor: author,
        mensajes: [],
        elmeroTexto: "",
        nextMessageId: 0
      }
    );
    // setiar
    this.setState({ topics: topics, newTopicName: '', newTopicAuthor: '' });
    // let path = `/`;
    // this.props.history.push(path); COMO HAGO UNA REDIRECCION A OTRO URL AHORA
  };

// -----------------------------------------------------------------------------------------------

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <BarraNavegacion />

          <Route exact path= '/' 
            render={ () => <MainContent topics={this.state.topics}
                                handleMessageInputAt={this.handleMessageInputAt}
                                newMessageSubmitHandlerAt={this.newMessageSubmitHandlerAt} />} />

          <Route exact path= '/newTopic' 
            render={ () => <NewTopic 
                                valueNewTopicName={this.state.newTopicName}
                                valueNewTopicAuthor={this.state.newTopicAuthor}
                                handleNewTopicNameInput={this.handleNewTopicNameInput}
                                handleNewTopicAuthorInput={this.handleNewTopicAuthorInput}
                                newTopicSubmitHandler={this.newTopicSubmitHandler} />} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
