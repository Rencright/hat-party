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
