import React from 'react';
import PropTypes from 'prop-types';
import './Video.scss';

class Video extends React.Component {
  static propTypes = {
    stream: PropTypes.object.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    width: null,
    height: null,
  };

  render() {
    const {
      stream,
      width,
      height,
    } = this.props;

    const sizeProps = {};
    if (width) {
      sizeProps.width = width;
    }
    if (height) {
      sizeProps.height = height;
    }

    return (
      <video srcObject={stream} {...sizeProps} autoPlay muted />
    );
  }
}


export default Video;
