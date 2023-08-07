import { Component, createRef } from 'react'

class SearchBar extends Component {

    state = {
      search: "Avengers",
      type: "all",
    }

    searchInputRef = createRef();

    handleText = (e) => {
      // console.log(e.key);
      if(e.key === "Enter") this.props.searchMovies(this.state.search,this.state.type);      
    }

    handleCategory = (e) => {
      this.setState({
        type: e.target.dataset.type,
      },() => {
        this.props.searchMovies(this.state.search,this.state.type);
      });
      
    }

  render() {
    const {search} = this.state;
    return (
      <div className="search">
        <div className="search-bar">
              <input type="search" onKeyDown={this.handleText} name="search" ref={this.searchInputRef} onChange={(e) => (this.setState({[e.target.name]:e.target.value,}))} value={search} autoComplete='off' required />
              <button className="search-btn">
                  <span>Search</span>
              </button>
        </div>
        <div className="radio-toggles">
            <input type="radio" id="option-1" name="radio-options" data-type='movie' onChange={this.handleCategory} checked={this.state.type === "movie"} />
            <label htmlFor="option-1">Movie</label>
            <input type="radio" id="option-2" name="radio-options" data-type="all" onChange={this.handleCategory} checked={this.state.type === "all"} />
            <label htmlFor="option-2">All</label>
            <input type="radio" id="option-3" name="radio-options" onChange={this.handleCategory} data-type="series" checked={this.state.type === "series"} />
            <label htmlFor="option-3">Series</label>
            <div className="slide-item"></div>
        </div>
      </div>
    )
  }
}

export default SearchBar;