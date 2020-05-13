import PropTypes from 'prop-types';

const appearanceSchema = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
});

const userSchema = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  joined: PropTypes.number.isRequired,
  appearance: appearanceSchema.isRequired,
  videoStream: PropTypes.object,
  connected: PropTypes.bool.isRequired,
});

const messageSchema = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  type: PropTypes.oneOf('text', 'appearance').isRequired,
  body: PropTypes.oneOfType(PropTypes.string, appearanceSchema).isRequired,
  timestamp: PropTypes.number.isRequired,
});


export { userSchema, messageSchema, appearanceSchema };
