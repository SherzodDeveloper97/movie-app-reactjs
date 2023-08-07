import { Component } from 'react'
import Movie from './Movie';
import PageNotFount from './PageNotFount';

class Movies extends Component {
    state = {  } 
    render() { 
        const {movies} = this.props;
        return (
            <div className='movies'>
                {movies.length ? movies.map((movie) => (
                    <Movie key={movie.imdbID} {...movie} />
                )) : <PageNotFount />}
            </div>
        );
    }
}

export default Movies;