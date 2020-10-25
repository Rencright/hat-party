import React from 'react';
import PropTypes from 'prop-types';
import './LiveElementList.scss';

/**
 * Component objectives:
 * - a div that fits its container.
 * - its vertical overflow is handled via scrolling.
 * - if it's scrolled to the bottom, it stays at the bottom, no matter what elements are added or removed.
 * - if it's not scrolled to the bottom, it maintains its scrolling position when new elements are added.
 * - it has a prop for the last "important" change.
 * - it has a button to scroll all the way to the bottom, which is only visible when the last "important" change is
 * after the last time the div was scrolled to the bottom.
 * - doesn't care what its children are.
 */

class LiveElementList extends React.Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>Component code here</div>
    );
  }
}


export default LiveElementList;
