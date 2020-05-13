import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import update from 'immutability-helper';
import { Heading, UserText } from '../../components/atoms';
import './HatParty.scss';
import FakeChatroomHandler from '../../model/FakeChatroomHandler';

class HatParty extends React.Component {
  // static propTypes = {

  // };

  // static defaultProps = {

  // };

  state = {
    // darkMode: true,
    darkMode: false,
    connected: false,
    color: 'standard',
    displayName: 'Anonymous',
    uid: null,
    messages: [],
    userLookup: {},
  };

  constructor(props) {
    super(props);
    this.chatroomHandler = new FakeChatroomHandler();
    this.chatroomHandler.addMessageListener(this.onMessageReceived);
    this.chatroomHandler.addUserJoinListener(this.onUserJoined);
    this.chatroomHandler.addUserLeaveListener(this.onUserLeft);
  }

  componentDidMount() {
    this.connect();
  }

  connect = async () => {
    const { color, displayName } = this.state;

    const newUser = this.chatroomHandler.connect({ color, displayName });

    this.setState((prevState) => {
      return {
        uid: newUser.uid,
        connected: true,
        userLookup: {
          $merge: {
            [newUser.uid]: newUser,
          },
        },
      };
    });
  }

  onMessageReceived = (message) => {
    this.setState((prevState) => {
      const messages = [...prevState.messages];
      messages.push(message);
      messages.sort((m1, m2) => m1.timestamp - m2.timestamp);
      return {
        messages,
      };
    });
  };

  onUserJoined = (user) => {
    this.setState((prevState) => {
      return update(prevState, {
        userLookup: {
          $merge: {
            [user.uid]: user,
          },
        },
      });
    });
  };

  onUserLeft = (uid) => {
    this.setState((prevState) => {
      return update(prevState, {
        userLookup: {
          [uid]: {
            connected: { $set: false },
          },
        },
      });
    });
  };

  render() {
    const {
      darkMode,
    } = this.state;

    const classNameList = ['HatParty'];
    if (darkMode) {
      classNameList.push('darkMode');
    }

    return (
      <div className={classNameList.join(' ')}>
        <Helmet>
          <title>Hat Party</title>
        </Helmet>
        <Heading size="1">Hat Party</Heading>
        <Heading size="2">Group Title</Heading>
        <UserText>The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="red">The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="orange">The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="yellow">The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="green">The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="blue">The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="purple">The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="grey">The quick brown fox jumps over the lazy dog.</UserText>
        <UserText color="brown">The quick brown fox jumps over the lazy dog.</UserText>
        <div className="HatParty darkMode">
          <Heading size="2">Dark Mode</Heading>
          <UserText>The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="red">The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="orange">The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="yellow">The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="green">The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="blue">The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="purple">The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="grey">The quick brown fox jumps over the lazy dog.</UserText>
          <UserText color="brown">The quick brown fox jumps over the lazy dog.</UserText>
        </div>
      </div>
    );
  }
}

export default HatParty;
