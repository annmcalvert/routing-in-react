import React, { Component } from 'react';

class FilmId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id);
            const film = await res.json();
            this.setState({ film });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {
            film: {
                description,
                director,
                id,
                // length,
                // locations,
                // people,
                producer,
                release_date,
                rt_score,
                // species,
                title,
                // url,
                // vehicles,
            }
        } = this.state;

        return (
            <div className="card bg-light mb-3">
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <p>Description: {description}</p>
                    <p>Director: {director}</p>
                    <p>Producer: {producer}</p>
                    <p>Release Date: {release_date}</p>
                    <p>RT Score: {rt_score}</p>
                    {/* <p>Locations: {locations}</p>
                    <p>People: {people}</p>
                    <p>Species: {species}</p>
                    <p>Url: {url}</p>
                    <p>Vehicles: {vehicles}</p> */}
                    <p>ID: {id}</p>
                </div>
            </div>
        )
    }
}

export default FilmId;