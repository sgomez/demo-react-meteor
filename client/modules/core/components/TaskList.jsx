import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task.jsx';
import {Meteor} from 'meteor/meteor';

class TaskList extends React.Component {
  handleSubmit(event){
    event.preventDefault();

    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call("tasks.new", text);

    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  }

  render () {
    const {tasks} = this.props;

    return (
      <div className="ui middle aligned divided list">
        <div className="item">
          <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="ui fluid action input">
              <input type="text" ref="textInput" placeholder="Añadir nueva tarea..."/>
              <button type="submit" className="ui button">Añadir</button>
            </div>
          </form>
        </div>
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
