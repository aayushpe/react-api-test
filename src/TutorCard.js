import React, { Component } from 'react';

class TutorCard extends Component {
  constructor(props) {
    super(props);
    
    // Define the url variable within the class constructor
    this.url = `https://robohash.org/${this.props.username}.png?set=set4`;
  }
  
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorCard;
