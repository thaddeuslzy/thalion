//This is a dynamic testimonies page
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import { Testimonies } from "/imports/api/testimonies.js";
import { FlowRouter } from 'meteor/kadira:flow-router';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import TestimonyEditor from '/imports/ui/soulFood/testimonies/TestimonyEditor.js';
import TestimonyImage from '/imports/ui/soulFood/testimonies/TestimonyImage.js';
import NotFound from '/imports/ui/layouts/NotFound.js'
import { Roles } from 'meteor/alanning:roles';

const buttonStyle = {
  margin: "20px 15px",
  maxWidth: "120px"
}

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'];

class TestimonyContent extends Component {	
	constructor(props) {
		super(props); //No props here
		this.state = { status: false }
	}

	//componentWillMount --> a lifecycle method; eg to declare a starting variable when the component mounts
	showHideEditor() {
		//Editor is showing, have button
		if(this.state.status) {
			this.setState({status:false});
		} else {
			this.setState({status:true});
		}
	}

	renderShowHideButton() {
		if(this.state.status) {
			return (<button
                className="btn btn-outline-warning col"
                data-toggle="modal"
                data-target="#myModal"
                type="button"
                style={buttonStyle}
                onClick={this.showHideEditor.bind(this)}
                >Hide Editor 
            </button>); 
		} else {
			return (<button
              className="btn btn-outline-warning col"
              data-toggle="modal"
              data-target="#myModal"
              type="button"
              style={buttonStyle}
              onClick={this.showHideEditor.bind(this)}
              >Show Editor
            </button>);
		}
	}

	render() {
		let isAdmin = Roles.userIsInRole(this.props.currentUser, 'admin');
		//To fix the async problem for this.props.testimony
		//Add a check, to see if the testimony is loaded first
		if(!this.props.testimony) {
			return (
				<div>
					<NotFound />
				</div>
			);
		}
		
		if (isAdmin) {
			return (
				<div>
					<HelmetProvider>
	          <Helmet>
	            <title>{this.props.testimony.title}</title>
	          </Helmet>
	        </HelmetProvider>
					<TopNavBar />
					{this.state.status ? 
						<div>
							<div>
								<TestimonyImage testimony={this.props.testimony} /> 
							</div>
							<div> 
								<TestimonyEditor testimony={this.props.testimony}/> 
							</div>
							
						</div>
					: ''}
					{this.renderShowHideButton()}
					<div className="row">
	    			<div className="col-md-8 col-md-offset-2">
	    				<div dangerouslySetInnerHTML={{__html: this.props.testimony.mainImage }}></div>
	    				<h1>{this.props.testimony.title}</h1>
	    				<small>Written by: {this.props.testimony.author} on {this.props.testimony.createdAt.getDate()} {months[this.props.testimony.createdAt.getMonth()]} {this.props.testimony.createdAt.getFullYear()}</small>
	    				<br />

	    				<div className="testimony-content" 
	    						dangerouslySetInnerHTML={{__html: this.props.testimony.content }}>
	    				</div>
	    			</div>
					</div>
				</div>
			)
		} else {
				return (
					<div>
						<HelmetProvider>
		          <Helmet>
		            <title>{this.props.testimony.title}</title>
		          </Helmet>
		        </HelmetProvider>
						<TopNavBar />

						<div className="row">
		    			<div className="col-md-8 col-md-offset-2">
		    				<div dangerouslySetInnerHTML={{__html: this.props.testimony.mainImage }}></div>
		    				<h1>{this.props.testimony.title}</h1>
		    				<small>Written by: {this.props.testimony.author} on {this.props.testimony.createdAt.getDate()} {months[this.props.testimony.createdAt.getMonth()]} {this.props.testimony.createdAt.getFullYear()} </small>
		    				<br />

		    				<div className="testimony-content" 
		    						dangerouslySetInnerHTML={{__html: this.props.testimony.content }}>
		    				</div>
		    			</div>
						</div>
					</div>
				)
		}
	}
}

export default withTracker(() => {
  //Or...this.props.params.id
  let testimonyId = FlowRouter.getParam('id');
  //First subscribe based on id
  Meteor.subscribe('testimonies');
  return {
    testimony: Testimonies.findOne(testimonyId),
    currentUser: Meteor.user()
  }
})(TestimonyContent);