import React, { Component } from 'react';
import ToolbarButton from '../ToolbarButton';
import './Compose.css';

export default class Compose extends Component {
  render() {
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />

        <ToolbarButton icon="ion-ios-camera" />
        <ToolbarButton icon="ion-ios-image" />
        <ToolbarButton icon="ion-ios-mic" />
        <ToolbarButton icon="ion-ios-card" />
        <ToolbarButton icon="ion-logo-game-controller-b" />
        <ToolbarButton icon="ion-ios-happy" />
      </div>
    );
  }
}