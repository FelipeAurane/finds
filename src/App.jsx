// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import 'boxicons'
import "remixicon/fonts/remixicon.css";
import "./App.css";
import "./scripts/menunavbar.jsx";
function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="navigation">
          <ul>
            <li className="list active">
              <a href="#">
                <span className="icon">
                <box-icon type='solid' name='carousel'></box-icon>
                </span>
                <span className="text">Inicio</span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                <box-icon className="icons" type='solid' name='carousel'></box-icon>
                </span>
                <span className="text">Buscar</span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                <box-icon type='solid' name='carousel'></box-icon>
                </span>
                <span className="text">Criar</span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                <box-icon type='solid' name='carousel'></box-icon>
                </span>
                <span className="text">Marcar</span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                <box-icon type='solid' name='carousel'></box-icon>
                </span>
                <span className="text">Eu</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
        <section>
          {/* Conteúdo das seções aqui */}
          <div id="home">
            <h2>Inicio</h2>
          </div>

          <div id="search">
            <h2>Buscar</h2>
          </div>

          <div id="add">
            <h2>Criar Evento</h2>
          </div>

          <div id="marcar">
            <h2>Marcar</h2>
          </div>

          <div id="profile">
            <h2>Perfil</h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
