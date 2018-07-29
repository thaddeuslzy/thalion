//List of articles
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Articles } from "/imports/api/articles.js";
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import classnames from 'classnames';

const buttonStyle = {
  margin: "10px 15px",
  maxWidth: "120px"
}

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'];

class ArticleList extends Component {
  handleEdit = (articleId) => {
    // onEdit we want to have the form on AddEvents populate the fields and allow for editing
    // so we pass the eventId to the parent component so that it tells AddEvent component what data is to be displayed
    this.props.handleEdit(articleId);
  }

  handleDelete = (articleId) => {
    // onDelete we just remove the event from the db
    Meteor.call('articles.remove', {_id: articleId});
  }

  //componentWillMount --> loads data just before component is rendered; good for loading data
  render() {
    let isAdmin = Roles.userIsInRole(this.props.currentUser, 'admin');

    // Use `` for ${event._id} --> takes a js expression that will be displayed as a template string
    return (
      <div className="articles-container">
        <div className="page-header">
          <h1 className="article-head" style={{ margin: "20px 100px"}}>Articles</h1>
        </div>
        {
          this.props.articles.length ? this.props.articles.map((article) => (
            <div className="list-group" key={article._id} style={{ margin: "20px 100px" }}>
              <div className="list-group-item list-group-item-action flex-column align-items-start">

                <div className="d-flex w-100 justify-content-between">
                  {/*<h4 className="mb-1">{event.title}</h4>*/}
                  <p>
                  <a className="article-name" href={`/articles/${article._id}`}>{article.title}</a> <br />

                  <small>Author: {article.author}</small> <br />
                  <small>
                  	Posted: {article.createdAt.toLocaleDateString()}
                  </small>
                  </p>
                </div>

                <p className="mb-1">{article.description}</p>

                { /*Show edit and delete button only if admin*/ }
                {isAdmin ?
                  <div className="controls row">
                  <button
                    className="btn btn-outline-warning col"
                    data-toggle="modal"
                    data-target="#myModal"
                    type="button"
                    style={buttonStyle}
                    onClick={() => this.handleEdit(article._id)}
                  >
                    Edit Article
                  </button>

                  <button
                    className="btn btn-outline-danger col"
                    style={buttonStyle}
                    onClick={() => this.handleDelete(article._id)}
                  >
                    Delete Article
                  </button> 
                </div> : ''}

              </div>
            </div>
          )) : ''
        }
      </div>
    );
  }
}

export default withTracker(() => {
  //First set up subscription
  Meteor.subscribe('articles');

  //Return an object. Whatever we return will be sent to 
  //ArticleList as props
  return {
  	//Sort by newest to oldest
    articles: Articles.find({}, {sort: {createdAt: -1}}).fetch(), 
    currentUser: Meteor.user()
  }
})(ArticleList);
