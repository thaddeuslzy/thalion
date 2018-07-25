//Client-side code
import { Accounts } from 'meteor/accounts-base';
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
//import { Accounts } from 'meteor/std:accounts-ui'; 
import { FlowRouter } from 'meteor/kadira:flow-router';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  //loginPath: '/login',
  //onSignedInHook: () => FlowRouter.go('/'),
  //onSignedOutHook: () => FlowRouter.go('/')
});