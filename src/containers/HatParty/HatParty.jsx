import React from 'react';
// import process from 'process';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import update from 'immutability-helper';
import { InterfaceText } from '../../components/atoms';
import { PageHeader } from '../../components/organisms';
import './HatParty.scss';
import FakeChatroomHandler from '../../model/FakeChatroomHandler';

class HatParty extends React.Component {
  // static propTypes = {

  // };

  // static defaultProps = {

  // };

  state = {
    darkMode: true,
    // darkMode: false,
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

    const newUser = await this.chatroomHandler.connect({ color, displayName });

    this.setState({
      uid: newUser.uid,
      connected: true,
      userLookup: {
        $merge: {
          [newUser.uid]: newUser,
        },
      },
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
    // console.log(process);
    // console.log(process.env.NODE_ENV);
    // console.log(process.env.REACT_APP_TITLE);
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
        <PageHeader title="Hat Party" />
        <InterfaceText>Hello World</InterfaceText>
      </div>
    );
  }
}

export default HatParty;
