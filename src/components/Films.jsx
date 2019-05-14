import React, { Component } from 'react';
import DisplayFilm from './DisplayFilm';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://ghibliapi.herokuapp.com/films");
            const films = await res.json();
            this.setState({ films });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                {this.state.films.map(film => <DisplayFilm key={film.id} film={film} />)}
            </>
        );
    }
}

export default Films;