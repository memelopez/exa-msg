import React, { Component } from 'react';
import './App.css';

import BarraNavegacion from './BarraNavegacion'
import MainContent from './MainContent';

class App extends Component {

  state = {

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
            mensaje: "sigo caminando",
            autor: "vinicious jr"
          },
          {
            idMensaje: 3,
            mensaje: "quizas despierte mi fuego",
            autor: "elmer"
          }
        ]
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
        ]
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
        ]
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
        ]
      }
    ]
  };


  render() {
    return (
      <div className="App">
        <BarraNavegacion/>
        <MainContent
          topics={this.state.topics} />
      </div>
    );
  }
}

export default App;
