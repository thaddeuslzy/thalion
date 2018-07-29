//This is a dynamic articles page
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import { Articles } from "/imports/api/articles.js";
import { FlowRouter } from 'meteor/kadira:flow-router';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import ArticleEditor from '/imports/ui/soulFood/ArticleEditor.js';
import ArticleImage from '/imports/ui/soulFood/ArticleImage.js';
import NotFound from '/imports/ui/layouts/NotFound.js'
import { Roles } from 'meteor/alanning:roles';

const buttonStyle = {
  margin: "20px 15px",
  maxWidth: "120px"
}

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'];

class ArticleContent extends Component {	
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
		//To fix the async problem for this.props.article
		//Add a check, to see if the article is loaded first
		if(!this.props.article) {
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
	            <title>{this.props.article.title}</title>
	          </Helmet>
	        </HelmetProvider>
					<TopNavBar />
					{this.state.status ? 
						<div>
							<div>
								<ArticleImage article={this.props.article} /> 
							</div>
							<div> 
								<ArticleEditor article={this.props.article}/> 
							</div>
							
						</div>
					: ''}
					{this.renderShowHideButton()}
					<div className="row">
	    			<div className="col-md-8 col-md-offset-2">
	    				<div dangerouslySetInnerHTML={{__html: this.props.article.mainImage }}></div>
	    				<h1>{this.props.article.title}</h1>
	    				<small>Written by: {this.props.article.author} on {this.props.article.createdAt.getDate()} {months[this.props.article.createdAt.getMonth()]} {this.props.article.createdAt.getFullYear()}</small>
	    				<br />

	    				<div className="article-content" 
	    						dangerouslySetInnerHTML={{__html: this.props.article.content }}>
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
		            <title>{this.props.article.title}</title>
		          </Helmet>
		        </HelmetProvider>
						<TopNavBar />

						<div className="row">
		    			<div className="col-md-8 col-md-offset-2">
		    				<div dangerouslySetInnerHTML={{__html: this.props.article.mainImage }}></div>
		    				<h1>{this.props.article.title}</h1>
		    				<small>Written by: {this.props.article.author} on {this.props.article.createdAt.getDate()} {months[this.props.article.createdAt.getMonth()]} {this.props.article.createdAt.getFullYear()}</small>
		    				<br />

		    				<div className="article-content" 
		    						dangerouslySetInnerHTML={{__html: this.props.article.content }}>
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
  let articleId = FlowRouter.getParam('id');
  //First subscribe based on id
  Meteor.subscribe('articles');
  return {
    article: Articles.findOne(articleId),
    currentUser: Meteor.user()
  }
})(ArticleContent);