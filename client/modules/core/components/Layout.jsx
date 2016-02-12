import React from 'react';

class Layout extends React.Component {
  render () {
    const {content} = this.props;

    return (
      <div className="ui container">
        <div className="ui menu">
          <div className="header item">Todo</div>
        </div>
        <div className="ui container">
          { content() }
        </div>
      </div>
    );
  }
}

export default Layout;
