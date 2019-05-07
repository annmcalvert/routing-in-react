import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// import FilmId from './FilmId';


// const DisplayFilm = ({ film: { title, description, id } }) => {
// const id=this.film.id;
// let filmUrl={"/films/" + id};

// let filmUrl={`/films/${this.state.film.id}`};


const DisplayFilm = ({ film: { title, description, id } }) => {

    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text">id is {id}</p>
                
                        <Link className="btn btn-primary m-3" to={"/films/" + id}>More Information</Link>
                  
            </div>
        </div>

    )
}
// class DisplayFilm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // id: ""
//         };
//     }

//     // componentDidMount() {
//     //     this.setState({
//     //         id: this.props.match.params.id
//     //     });
//     // }

//     render({ film: { title, description } }) {
//         console.log("yo");
//         return (

//             <div className="card bg-light mb-3" >
//                 <div className="card-header">{this.title}</div>
//                 <div className="card-body">
//                     <p className="card-text">{this.props.description}</p>
//                     <Router>
//                         <Fragment>
//                             <Link className="btn btn-primary m-3" to="/films/" >More Information</Link>
//                             <Switch>
//                                 <Route path="/films/:id" component={FilmId} />
//                             </Switch>
//                         </Fragment>
//                     </Router>
//                 </div>
//             </div>
//         );
//     }
// }

export default DisplayFilm;