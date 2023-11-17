import React, {Component} from 'react'
import TutorCard from './TutorCard';
import Axios from "axios"

class Tutors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listofTutors: []
        };
    }

    componentDidMount() {
        Axios.get("http://localhost:3500/users")
            .then((response) => {
                this.setState({ listofTutors: response.data });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    
    render () {
        const { listofTutors } = this.state;
        return (
            <div className='Tutor display'>
                {listofTutors.map((tutor) => {
                    return (
                        <div>
                            <TutorCard username={tutor.username} rating={tutor.rating} description={tutor.description}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tutors