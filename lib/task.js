import {Tasks} from '/lib/collections';

const Task = Astro.Class({
  name: 'Task',
  collection: Tasks,
  fields: {
    description: 'string',
    isDone: 'boolean',
    createdAt: 'date'
  }
});

export default Task;
