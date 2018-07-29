import React, { Component } from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import AddArticle from '/imports/ui/soulFood/AddArticle.js';
import ArticleList from '/imports/ui/soulFood/ArticleList.js';
import { Articles } from '/imports/api/articles.js';
import { Meteor } from 'meteor/meteor';

/*1x Article should display:
Big Image: --> React Quill with image-only
Title:
posted at: new Date()
Written by: 
Article --> Another React Quill component

For the list of articles...
- Sort by createdAt
- 3 Article thumbnails per row
--> Title
--> Big Image
--> written by
--> postedAt
--> views (optional)
*/
class ArticlesPage extends Component {
	constructor(props) {
    //No props here... This is the parent component of Events
    super(props);
    this.state = {
      isUpdating: false,
      article: {}
    }
  }

  handleEdit = (articleId) => {
    // find the event that requires editing
    const article = Articles.findOne({_id: articleId});

    // set it into state also sets a flag `isUpdating` that will allow us to have a dynamic form on AddEvent component
    this.setState({
      article,
      isUpdating: true
    })
  }

	render() {
		return(
			<div>
				<HelmetProvider>
						<Helmet>
							<title>Articles</title>
						</Helmet>
					</HelmetProvider>
					<TopNavBar />

					<div className = "jumbotron articleback">
				  <h2 className = "homehead" > ARTICLES</h2>

				  <hr className = "gradient" />
				  
				  <p className = "text-center"> </p>

				</div>

				<AddArticle article={this.state.article}
										isUpdating={this.state.isUpdating}/>

				<ArticleList handleEdit={this.handleEdit} />
			</div>
		);
	}
}

export default ArticlesPage;