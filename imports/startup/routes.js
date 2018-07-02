import React from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import EventsPage from '/imports/ui/layouts/EventsPage.js';

import HomePage from '/imports/ui/layouts/HomePage.js';
import AboutPage from '/imports/ui/layouts/AboutPage.js';

FlowRouter.route('/', {
  name: 'Home',
  action(){
    /*mount( AppMount, {
      content: <HomePage />
    })*/
    ReactDOM.render(<HomePage />, document.getElementById('app'));
  }
});

FlowRouter.route('/about', {
  name: 'About',
  action(){
    /*mount( AppMount, {
      content: <AboutPage />
    })*/
    ReactDOM.render(<AboutPage />, document.getElementById('app'));
  }
});

FlowRouter.route('/events', {
  name: 'Events',
  action(){
    /*mount( AppMount, {
      content: <App />
    })*/
    ReactDOM.render(<EventsPage />, document.getElementById('app'));
  }
})