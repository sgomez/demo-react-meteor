import React from 'react';

class Task extends React.Component {
  render() {
    const {task} = this.props;

    return (
      <div className="item">
        <div className="right floated content">
          <div className="ui basic button">Remove</div>
        </div>
        <div className="ui toggle checkbox" style={{paddingTop: '5px'}}>
          <input type="checkbox" name="" id=""/>
          <label>{task.description}</label>
        </div>
      </div>
    );
  }
}

Task.propTypes = {};
Task.defaultProps = {};

export default Task;
