import 'aframe';
import React, {Component} from 'react';
import { Entity, Scene } from 'aframe-react'

class App extends Component {
  render() {
    return (
      <a-scene physics="gravity: -1.6" renderer="antialias: true">
      <a-entity camera look-controls wasd-controls></a-entity>
      <a-entity
        id="leftController"
        static-body="shape: sphere; sphereRadius: 0.02;"
        vive-controls="hand: left"
        sphere-collider="objects: .throwable"
        grab
      ></a-entity>
      <a-entity
        id="rightController"
        static-body="shape: sphere; sphereRadius: 0.02;"
        vive-controls="hand: right"
        sphere-collider="objects: .throwable"
        grab
      ></a-entity>

      <a-sphere
        class="throwable"
        dynamic-body
        position="0 0.25 -0.5"
        radius="0.10"
        color="green"
      ></a-sphere>
      <a-sphere
        class="throwable"
        dynamic-body
        position="0.25 0.25 -0.5"
        radius="0.10"
        color="green"
      ></a-sphere>
      <a-sphere
        class="throwable"
        dynamic-body
        position="-0.25 0.25 -0.5"
        radius="0.10"
        color="green"
      ></a-sphere>

      <a-box
        static-body
        position="2 1 0"
        width="2"
        height="0.1"
        depth="2"
        color="grey"
      ></a-box>

      <a-entity id="boxes"></a-entity>

     
      <a-plane
        static-body
        rotation="-90 0 0"
        width="10"
        height="10"
        color="black"
      ></a-plane>

   
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
    );
  }
}

export default App;
