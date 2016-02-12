import React from 'react';
import Task from './Task.jsx';

class TaskList extends React.Component {
  render () {
    const {tasks} = this.props;

    return (
      <div className="ui middle aligned divided list">
        {tasks.map(TaskList.renderTask)}
      </div>
    );
  }

  static renderTask (task, index) {
    return (
      <Task task={task} key={index}/>
    );
  }
}

export default TaskList;
