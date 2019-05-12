import React, { Component } from 'react';
import PropTypes from 'prop-types';

// subcomponents
class Content extends Component {

  static propTypes = {
    body: PropTypes.object.isRequired
  }

  render() {
    const { body } = this.props;
    // RETURN THE COMPONENT
    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}

export default Content;
