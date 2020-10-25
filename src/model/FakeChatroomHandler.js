import ChatUser from './ChatUser';

class FakeChatroomHandler {
  _localUser = null;
  _connected = false;
  _messageListeners = [];
  _userJoinListeners = [];
  _userLeaveListeners = [];
  _connectedUsers = [];

  _onMessageReceived = (message) => {
    this._messageListeners.forEach((func) => func && func(message));
  };

  _onUserJoined = (user) => {
    this._userJoinListeners.forEach((func) => func && func(user));
  };

  _onUserLeft = (uid) => {
    this._userLeaveListeners.forEach((func) => func && func(uid));
  };

  connect = async (appearanceSettings) => {
    this._localUser = new ChatUser();
    this._connected = true;

    window.setTimeout(() => {
      const fakeUser = new ChatUser();
      const appearance = {
        displayName: 'Alice',
        color: 'red',
      };
      this._connectedUsers.push(fakeUser);
      this._onUserJoined(fakeUser.toStateUserObject(appearance));
    }, 5000);

    return this._localUser.toStateUserObject(appearanceSettings);
  };

  disconnect = async () => {
    this._connected = false;
    this._localUser = null;
    this._connectedUsers = [];
    return true;
  };

  isConnected = () => this._connected;

  sendMessage = async (message) => {
    console.log(message);
    this.setTimeout(() => {
      if (this._connectedUsers.length > 0) {
        const firstFakeUser = this._connectedUsers[0];

        const fakeResponseMessage = {
          uid: firstFakeUser.getUid(),
          type: 'text',
          body: 'Hello! This is a fake, hard-coded response message!',
          timestamp: new Date().getTime(),
        };

        this._onMessageReceived(fakeResponseMessage);
      }
    }, 5000);
  };

  addMessageListener = (messageListener) => {
    this._messageListeners.push(messageListener);
  };

  addUserJoinListener = (userJoinListener) => {
    this._userJoinListeners.push(userJoinListener);
  };

  addUserLeaveListener = (userLeaveListener) => {
    this._userLeaveListeners.push(userLeaveListener);
  };

  getUsers = () => {
    return this._connectedUsers;
  };

  openVideoStream = async () => {
    window.alert('Video is not supported yet, so just pretend that you can see your face on the screen.');
  };

  closeVideoStream = async () => {
    window.alert('Video is not supported yet, so just pretend your face was on the screen and just disappeared now.');
  };
}

export default FakeChatroomHandler;
