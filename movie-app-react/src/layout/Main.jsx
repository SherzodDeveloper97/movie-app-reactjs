import { Component } from 'react';
import Movies from '../components/Movies';
import SearchBar from '../components/SearchBar';

class Main extends Component {
    state = { 
        movies: [],
        mType: "",
    } 

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=d4374ea2&s=avengers")
            .then((response) => response.json())
            .then((data) => this.setState({movies:data.Search}));
    }
    
    searchMovies = (text,type = "all") => {
        fetch(`https://www.omdbapi.com/?apikey=d4374ea2&s=${text}${type !== "all" ? `&type=${type}` : ""}`)
        .then((response) => response.json())
        .then((data) => this.setState({movies:data.Search}))
    }

    render() { 
        return (
            <div className='container'>
                <SearchBar searchMovies={this.searchMovies} />
                <Movies movies={this.state.movies} />
            </div>
        );
    }
}
 
export default Main;