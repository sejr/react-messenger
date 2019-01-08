import React, { Component } from 'react';
import './ConversationSearch.css';

export default class ConversationSearch extends Component {
  render() {
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
  }
}