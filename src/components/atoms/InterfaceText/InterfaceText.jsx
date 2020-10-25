import React from 'react';
// import PropTypes from 'prop-types';
import './InterfaceText.scss';

class InterfaceText extends React.PureComponent {
  // static propTypes = {

  // };

  // static defaultProps = {

  // };

  render() {
    const {
      children,
    } = this.props;

    return (
      <span className="InterfaceText">{children}</span>
    );
  }
}


export default InterfaceText;
