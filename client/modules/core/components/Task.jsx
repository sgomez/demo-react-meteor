import React from 'react';
import {Meteor} from 'meteor/meteor';

class Task extends React.Component {

  handleDeleteTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  handleDoneTask() {
    Meteor.call('tasks.checked', this.props.task._id, !this.props.task.isDone);
  }


  render() {
    const {task} = this.props;

    return (
      <div className="item">
        <div className="right floated content">
          <div className="ui basic button" onClick={this.handleDeleteTask.bind(this)}>&times;</div>
        </div>
        <div className="ui toggle checkbox" style={{paddingTop: '5px'}}>
          <input type="checkbox" readOnly={true}
                 checked={this.props.task.isDone}
                 onClick={this.handleDoneTask.bind(this)} />
          <label>{task.description}</label>
        </div>
      </div>
    );
  }
}

Task.propTypes = {};
Task.defaultProps = {};

export default Task;
