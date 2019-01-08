import React, { Component } from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default class ConversationListItem extends Component {
  componentDidMount() {
    shave('.conversation-snippet', 20);
  }

  render() {
    const { photo, name, text } = this.props.data;

    return (
      <div className="conversation-list-item">
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet">{ text }</p>
        </div>
      </div>
    );
  }
}