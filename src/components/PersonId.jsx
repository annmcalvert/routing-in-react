import React, { Component } from 'react';

class PersonId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id);
            const person = await res.json();
            this.setState({ person });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        // console.log(this.state.film);
        const {
            person: {
                name,
                age,
                gender,
                id,
                eye_color,
                films,
                hair_color,
                species,
                url

            }
        } = this.state;

        return (
            <div className="card bg-light mb-3">
                <div className="card-header">{name}</div>
                <div className="card-body">
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                    <p>Eye Color: {eye_color}</p>
                    <p>Hair Color: {hair_color}</p>
                    
                    
                    <p>ID: {id}</p>
                </div>
            </div>
        )
    }
}

export default PersonId;