import { Component } from 'react';

class Header extends Component {
    state = { 
        type: "",
     } 


    render() { 
        return (
            <header>
                <div className='header__nav'>
                    <a href="#!" className='brand__logo'>Creative Movie App</a>
                    <ul>
                        <li><a href="#!" onClick={() => this.setState({type:"movie"})}>Movies</a></li>
                        <li><a href="#!" onClick={() => this.setState({type:"series"})}>Serials</a></li>
                        <li><a href="#!">Logout</a></li>
                    </ul>
                </div>  

                <div className="main-head">
                    <a href="#!">
                        <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" alt="picture" />
                    </a>
                </div>
            </header>
        );
    }
}
 
export default Header;