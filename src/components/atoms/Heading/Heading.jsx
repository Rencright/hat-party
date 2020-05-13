import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

class Heading extends React.PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['1', '2']).isRequired,
  };

  render() {
    const { size, children } = this.props;
    switch (size) {
      case '1':
        return <h1 className="Heading">{children}</h1>;
      case '2':
        return <h2 className="Heading">{children}</h2>;
      default:
        return null;
    }
  }
}

export default Heading;
