import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

class LoginPage extends Component {
	constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit(event) {
		event.preventDefault();
		let username = event.target.username.value;
		let password = event.target.password.value;
		Meteor.loginWithPassword(username, password, (error) => {
			if(error) {
				this.setState({
					error: error.reason
				});
			} else {
				FlowRouter.go('/');
			}
		});
	}

	render() {
		const error = this.state.error;
		return(
			<div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
              <form id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="username"
                        id="username"
                        className="form-control input-lg"
                        placeholder="username"/>
                </div>
                <div className="form-group">
                  <input type="password"
                        id="password"
                        className="form-control input-lg"
                        placeholder="password"/>
                </div>
                <div className="form-group text-center">
                  <input type="submit"
                        id="login-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Login" />
                </div>
                <div className="form-group text-center">
                  <p className="text-center">
                    Don't have an account? Go back to <a href="/">home</a>
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>


			
		);
	}
}

export default LoginPage;