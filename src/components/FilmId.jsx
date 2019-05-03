import React, { Component} from 'react';


class FilmId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        };
    }

    componentDidMount() {
        // console.log(this.props.match)
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(
                (film) => {
                    this.setState({ film: film });
                });
        

    }

    render () {
        return (
            <h1>working</h1>
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