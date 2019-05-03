import React, { Component } from 'react';
import DisplayFilm from './DisplayFilm';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(
                (films) => {
                    this.setState({ films: films });
                });
                console.log(this.props.match.params.id)

    }

    render() {
        return (
            <div className="container">
                {this.state.films.map(film => <DisplayFilm key={film.id} film={film} />)}
            </div>
        );
    }
}



export default Films;