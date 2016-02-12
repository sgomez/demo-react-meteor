import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

import Layout from './components/Layout.jsx';
import TaskList from './containers/taskslist.jsx';

export default function (injectDeps, {FlowRouter}) {
  const LayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(LayoutCtx, {
        content: () => (<TaskList />)
      });
    }
  });

}
