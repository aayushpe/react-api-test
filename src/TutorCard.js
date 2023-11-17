import React, {Component} from 'react'

class TutorCard extends Component{
  render (){ 
    return(
      <div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="content">
    <div class="card">
        <div class="firstinfo"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="temp"/>
            <div class="profileinfo">
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

export default TutorCard