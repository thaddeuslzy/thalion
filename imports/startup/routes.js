import React from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import EventsPage from '/imports/ui/layouts/EventsPage.js';
import { Meteor } from 'meteor/meteor';
//import pages
import HomePage from '/imports/ui/layouts/HomePage.js';
import AboutPage from '/imports/ui/layouts/AboutPage.js';
import EventDetails from '/imports/ui/events/EventDetails.js';
import NotFound from '/imports/ui/layouts/NotFound.js';
import LoginPage from '/imports/ui/layouts/LoginPage.js';
import ArticlesPage from '/imports/ui/layouts/ArticlesPage.js';
import ArticleContent from '/imports/ui/soulFood/ArticleContent.js';
import FamilyPage from '/imports/ui/layouts/FamilyPage.js';

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
    ReactDOM.render(<AboutPage />, document.getElementById('app'));
  }
});

FlowRouter.route('/events', {
  name: 'Events',
  action(){
    ReactDOM.render(<EventsPage />, document.getElementById('app'));
  }
});

FlowRouter.route('/events/:id', {
  name: 'Event-Details',
  action(){
    ReactDOM.render(<EventDetails />, document.getElementById('app'));
  }
});

FlowRouter.route('/family', {
  name: 'Family',
  action(){
    ReactDOM.render(<FamilyPage />, document.getElementById('app'));
  }
});

FlowRouter.route('/login' , {
  name: 'Login-Page',
  action() {
    //If logged in already, redirect to home page
    if(Meteor.userId()) {
      FlowRouter.go('/');
    } else {
      ReactDOM.render(<LoginPage />, document.getElementById('app'));
    }
  }
});

FlowRouter.route('/articles', {
  name:'Articles-Page',
  action() {
    ReactDOM.render(<ArticlesPage />, document.getElementById('app'));
  }
});

FlowRouter.route('/articles/:id', {
  name: 'Article-Content',
  action(){
    ReactDOM.render(<ArticleContent />, document.getElementById('app'));
  }
});
FlowRouter.notFound = {
  action() {
    ReactDOM.render(<NotFound />, document.getElementById('app'));
  }
}

/*const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  triggersEnter: [
    (context, redirect) => {

    }
  ]
});*/
//document.querySelector('.container') //searches for HTML component with class 'container'