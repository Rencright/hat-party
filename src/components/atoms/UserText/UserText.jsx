import React from 'react';
import PropTypes from 'prop-types';
import './UserText.scss';

class UserText extends React.Component {
  static propTypes = {
    bold: PropTypes.bool,
    color: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  };

  static defaultProps = {
    bold: false,
    color: 'standard',
  };

  render() {
    const {
      bold,
      children,
      color,
    } = this.props;

    if (bold) {
      return (
        <strong className={`UserText bold ${color}`}>
          {children}
        </strong>
      );
    }
    return (
      <p className={`UserText ${color}`}>
        {children}
      </p>
    );
  }
}

export default UserText;
