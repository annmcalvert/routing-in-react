import React, { Component } from 'react';
import DisplayPerson from './DisplayPerson';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://ghibliapi.herokuapp.com/people");
            const people = await res.json();
            this.setState({ people });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                {this.state.people.map(person => <DisplayPerson key={person.id} person={person} />)}
            </>
        );
    }
}

export default People;