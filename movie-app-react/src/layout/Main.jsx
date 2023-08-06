import { Component } from 'react';
import Movies from '../components/Movies';

class Main extends Component {
    state = { 
        movies: [],
    } 

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=d4374ea2&s=avengers")
            .then((response) => response.json())
            .then((data) => this.setState({movies:data.Search}))
    }

    render() { 
        return (
            <div className='container'>
                <Movies movies={this.state.movies} />
            </div>
        );
    }
}
 
export default Main;