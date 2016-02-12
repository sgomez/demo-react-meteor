import {Tasks} from '/lib/collections';

export default function () {
  if (!Tasks.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const description = `This is the tasks title: ${lc}`;
      const isDone = false;
      const createdAt = new Date();
      Tasks.insert({description, isDone, createdAt});
    }
  }
}

