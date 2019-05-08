import React, { Component } from 'react';
import DisplayPerson from './DisplayPerson';


// class Films extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             films: []
//         };
//     }

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    // async componentDidMount() {
    //     try {
    //         const res = await fetch("https://ghibliapi.herokuapp.com/films");
    //         const films = await res.json();
    //         this.setState({ films });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

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
            <div className="container">
                {this.state.people.map(person => <DisplayPerson key={person.id} person={person} />)}
            </div>
        );
    }
}

export default People;