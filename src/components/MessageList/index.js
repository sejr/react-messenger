import React, { Component } from 'react';
import Message from '../Message';
import moment from 'moment';

import './MessageList.css';

const MY_USER_ID = 'apple';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        messages: [
          {
            id: 1,
            author: 'apple',
            message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: 'orange',
            message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: 'orange',
            message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
            timestamp: new Date().getTime()
          },
          {
            id: 4,
            author: 'apple',
            message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
            timestamp: new Date().getTime()
          },
          {
            id: 5,
            author: 'apple',
            message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
            timestamp: new Date().getTime()
          },
          {
            id: 6,
            author: 'apple',
            message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
            timestamp: new Date().getTime()
          },
          {
            id: 7,
            author: 'orange',
            message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
            timestamp: new Date().getTime()
          },
          {
            id: 8,
            author: 'orange',
            message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
            timestamp: new Date().getTime()
          },
          {
            id: 9,
            author: 'apple',
            message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
            timestamp: new Date().getTime()
          },
          {
            id: 10,
            author: 'orange',
            message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
            timestamp: new Date().getTime()
          },
        ]
      };
    });
  }

  renderMessages() {
    let i = 0;
    let messageCount = this.state.messages.length;
    let messages = [];

    while (i < messageCount) {
      let previous = this.state.messages[i - 1];
      let current = this.state.messages[i];
      let next = this.state.messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      messages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return messages;
  }

  render() {
    return(
      <div className="message-list">
      {
        this.renderMessages()
        // messages.map(message => {
        //   return (
        //     <Message
        //       data={message}
        //       key={message.id}
        //       isMine={message.author === MY_USER_ID}
        //       showTimestamp={false}
        //     />)
        // })
      }
      </div>
    );
  }
}