import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('tasks.list', function () {
    const selector = {};
    const options = {
      sort: {createdAt: -1},
      limit: 10
    };

    return Tasks.find(selector, options);
  });
}
