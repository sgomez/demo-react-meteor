import {Tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'tasks.remove'(_id) {
      check(_id, String);

      Tasks.remove(_id);
    }
  });

  Meteor.methods({
    'tasks.checked'(_id, checked) {
      check(_id, String);
      check(checked, Boolean);

      Tasks.update(_id, {$set: {isDone: checked} } );
    }
  });
}
