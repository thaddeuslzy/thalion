//This is the top nav bar for all pages
import React, { Component } from 'react';
import AccountsUIWrapper from '/imports/ui/AccountsUIWrapper.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class TopNavBar extends Component {
	renderLogoutButton() {
		//Render button only if logged in
		if(this.props.currentUser) {
			return (<a onClick={this.logout}
								className="logout">Logout</a>);
		}
		return (<a></a>);
	}

	logout(event) {
		event.preventDefault();
		Meteor.logout( (err) => {
			if (err) {
				console.log(err.reason);
			} else {
				FlowRouter.go('/');
			}
		});
	}
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>

			      <a href="/"><img className = "logo" src="https://i.imgur.com/aEiGxYh.png" title="OYP Logo" alt="OYP Logo"/></a>
			 
			    </div>

			    {/*Collect the nav links, forms, and other content for toggling*/}
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        
			        <li><a onClick={() => FlowRouter.go('/about')}>About Us</a></li>

			        <li><a onClick={() => FlowRouter.go('/events')}>Events</a></li>

			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Soul Food</a>
			          <ul className="dropdown-menu">
			            <li><a href="/articles">Articles</a></li>
			            <li><a href="/testimonies">Testimonies</a></li>
			          </ul>
			        </li>

			        <li className="dropdown">
			          <a onClick={() => FlowRouter.go('/family')} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OYP Family</a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Come As You Are</a></li>
			            <li><a href="#">Polytechnic Communities</a></li>
			            <li><a href="#">University Communities</a></li>
			            <li><a href="#">Working Adult Communities</a></li>
			            <li><a href="#">Vinea Domini</a></li>
			          </ul>
			        </li>
			      </ul>
			      
			      <ul className="nav navbar-nav navbar-right">
			      	<li>{this.renderLogoutButton()}</li>
			      	{/*<li className="dropdown">
			          <a href="/login" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account</a>
			          <ul className="dropdown-menu">
			            <li><AccountsUIWrapper /></li>
			          </ul>
			        </li>*/}
			      </ul>	

			    </div> {/* /.navbar-collapse */}
				
			  </div> {/*/.container-fluid*/}

			</nav>
  		);
	}
}

//export default TopNavBar;

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  }
})(TopNavBar);