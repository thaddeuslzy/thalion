import React, { Component } from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import AddTestimony from '/imports/ui/soulFood/testimonies/AddTestimony.js';
import TestimonyList from '/imports/ui/soulFood/testimonies/TestimonyList.js';
import { Testimonies } from '/imports/api/testimonies.js';
import { Meteor } from 'meteor/meteor';

/*1x Testimony should display:
Big Image: --> React Quill with image-only
Title:
posted at: new Date()
Written by: 
Testimony --> Another React Quill component

For the list of testimonies...
- Sort by createdAt
- 3 Testimonies thumbnails per row
--> Title
--> Big Image
--> written by
--> postedAt
--> views (optional)
*/
class TestimonyPage extends Component {
	constructor(props) {
    //No props here... This is the parent component of Events
    super(props);
    this.state = {
      isUpdating: false,
      testimony: {}
    }
  }

  handleEdit = (testimonyId) => {
    // find the event that requires editing
    const testimony = Testimonies.findOne({_id: testimonyId});

    // set it into state also sets a flag `isUpdating` that will allow us to have a dynamic form on AddEvent component
    this.setState({
      testimony,
      isUpdating: true
    })
  }

	render() {
		return(
			<div>
				<HelmetProvider>
						<Helmet>
							<title>Testimonies</title>
						</Helmet>
					</HelmetProvider>
					<TopNavBar />
				<AddTestimony testimony={this.state.testimony}
										isUpdating={this.state.isUpdating}/>

				<TestimonyList handleEdit={this.handleEdit} />
			</div>
		);
	}
}

export default TestimonyPage;