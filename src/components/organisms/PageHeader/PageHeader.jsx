import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import './PageHeader.scss';

class PageHeader extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {

  };

  render() {
    const {
      title,
    } = this.props;

    return (
      <header className="PageHeader">
        <Heading size="1">{title}</Heading>
      </header>
    );
  }
}


export default PageHeader;
