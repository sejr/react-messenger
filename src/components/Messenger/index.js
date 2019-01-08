import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import Compose from '../Compose';
import './Messenger.css';

export default class Messenger extends Component {
  render() {
    return (
      <div className="messenger">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />

        <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />

        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        <div className="scrollable container content">
          <MessageList />
        </div>

        <Compose rightItems={[
          <ToolbarButton icon="ion-ios-camera" />,
          <ToolbarButton icon="ion-ios-image" />,
          <ToolbarButton icon="ion-ios-mic" />,
          <ToolbarButton icon="ion-ios-card" />,
          <ToolbarButton icon="ion-logo-game-controller-b" />,
          <ToolbarButton icon="ion-ios-happy" />
        ]}/>
      </div>
    );
  }
}