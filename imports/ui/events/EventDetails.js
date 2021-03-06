//This is a dynamic events page
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import { Events } from "/imports/api/events.js";
import { FlowRouter } from 'meteor/kadira:flow-router';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import EventEditor from '/imports/ui/events/EventEditor.js';
import NotFound from '/imports/ui/layouts/NotFound.js'
import { Roles } from 'meteor/alanning:roles';

const buttonStyle = {
  margin: "20px 40px",
  maxWidth: "120px"
}

class EventDetails extends Component {
	//componentWillMount --> a lifecycle method; eg to declare a starting variable when the component mounts
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
		//To fix the async problem for this.props.event
		//Add a check, to see if the event is loaded first
		if(!this.props.event) {
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
	            <title>{this.props.event.title}</title>
	          </Helmet>
	        </HelmetProvider>
					<TopNavBar />
					{this.state.status ? 
					<div> 
					<EventEditor event={this.props.event}/><hr /> </div>
					: ''}
					{this.renderShowHideButton()}

					<main role="main" className="container">
			      <div className="row">
			        <div className="event-title">
				        <h1 className="pb-3 mb-4 font-italic border-bottom">
				            {this.props.event.title}
				        </h1>
				        <hr />
			        </div>
			        <div className="col-md-8 blog-main">
			          <div className="blog-post">
			            <div dangerouslySetInnerHTML={{__html: this.props.event.content }}></div>
			          </div> {/* End of blog-post*/}
			        </div> {/* End of blog-main*/}
			      
				      <div className="col-12 col-md-8 col-lg-4">
	              <div className="post-sidebar-area wow fadeInUpBig" data-wow-delay="0.2s">
	                {/* Widget Area */}
	                <div className="sidebar-widget-area">
		                <h3 className="font-italic"><strong>Details</strong></h3> <hr />
				            
				            <h4 className="font-italic"><strong>When:</strong></h4>
				            <p className="mb-0">{this.props.event.date}</p> <hr />
				            
				            <h4 className="font-italic"><strong>Location:</strong> </h4>
				           	<p>Office For Young People</p>
				          	<p>2 Lorong Low Koon</p> 
				            <p>Singapore 536449</p> <hr />

				            <h4 className="font-italic"><strong>Cost: </strong></h4>
				            <small>{this.props.event.cost}</small> <hr />
	                </div>
	              </div>
	            </div>

						</div> {/*End of row*/}	
		      </main>
				</div>
			);
		} else {
			return (
				<div>
					<HelmetProvider>
	          <Helmet>
	            <title>{this.props.event.title}</title>
	          </Helmet>
	        </HelmetProvider>
					<TopNavBar />

					<main role="main" className="container">
			      <div className="row">
			        <div className="event-title">
				        <h1 className="pb-3 mb-4 font-italic border-bottom">
				            {this.props.event.title}
				        </h1>
				        <hr />
			        </div>
			        <div className="col-md-8 blog-main">
			          <div className="blog-post">
			            <div dangerouslySetInnerHTML={{__html: this.props.event.content }}></div>
			          </div> {/* End of blog-post*/}
			        </div> {/* End of blog-main*/}
			      
				      <div className="col-12 col-md-8 col-lg-4">
	              <div className="post-sidebar-area wow fadeInUpBig" data-wow-delay="0.2s">
	                {/* Widget Area */}
	                <div className="sidebar-widget-area">
		                <h3 className="font-italic"><strong>Details</strong></h3> <hr />
				            
				            <h4 className="font-italic"><strong>When:</strong></h4>
				            <p className="mb-0">{this.props.event.date}</p> <hr />
				            
				            <h4 className="font-italic"><strong>Location:</strong> </h4>
				           	<p>Office For Young People</p>
				          	<p>2 Lorong Low Koon</p> 
				            <p>Singapore 536449</p> <hr />

				            <h4 className="font-italic"><strong>Cost: </strong></h4>
				            <small>{this.props.event.cost}</small> <hr />
	                </div>
	              </div>
	            </div>

						</div> {/*End of row*/}	
		      </main>
				</div>
			);
		}	
	}
}

export default withTracker(() => {
  //Or...this.props.params.id
  let eventId = FlowRouter.getParam('id');
  //First subscribe based on id
  Meteor.subscribe('events');
  return {
    event: Events.findOne(eventId),
    currentUser: Meteor.user()
  }
})(EventDetails);