import React, { Component } from 'react';
import { Axios } from 'axios';

class TutorCard extends Component {
  constructor(props) {
    super(props);
    
    // Define the url variable within the class constructor
    this.url = `https://robohash.org/${this.props.username}.png?set=set4`;
  }

  handleDelete = async () => {
    const { id } = this.props;

    try {
      // Make a DELETE request to your API endpoint with the user id
      await Axios.delete(`http://localhost:3500/users/${id}`);

      // Assuming you have a function to update the list of tutors in the parent component
      // This function should refetch the tutor data or update the state to reflect the deletion
      this.props.onDelete(id);
    } catch (error) {
      console.error('Error deleting tutor:', error);
    }
  };
  
  render() { 
    return (
      <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="content">
          <div className="card">
            <div className="firstinfo">
              <img src={this.url} alt="temp" />
              <div className="profileinfo">
                <h1>{this.props.username}</h1>
                <h3>Rating: {this.props.rating} Stars</h3>
                <p>{this.props.description}</p>
                <button onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorCard;
