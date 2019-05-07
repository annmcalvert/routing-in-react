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

    // componentDidMount() {
    //     // console.log(this.props.match)
    //     fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
    //         .then(res => res.json())
    //         .then(
    //             (film) => {
    //                 this.setState({ film });
    //             });
    // }

    render() {
        console.log(this.state.film);
        return (
            <div>
                <h1>ID: {this.state.film.id} </h1>
                <h1>working</h1>
            </div>
        )
    }

    // render () {
    //     return (
    //         <div className="card bg-light mb-3">
    //             <div className="card-header">{this.state.movie.title}</div>
    //             <div className="card-body">
    //                 <p className="card-text">{this.state.movie.description}</p>
    //             </div>
    //         </div>

    //     )
    // }


    // const FilmId = ({ film: { title, description } }) => {
    //     return (
    //         <div className="card bg-light mb-3">
    //             <div className="card-header">{title}</div>
    //             <div className="card-body">
    //                 <p className="card-text">{description}</p>
    //             </div>
    //         </div>

    //     )
}

export default FilmId;