import { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className="footer">
                <div className="main-head" id='main-foot'>
                    <a href="#!">
                        <img src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" alt="picture" />
                    </a>
                </div>
            </div>
            <footer className='page-footer'>
                <div className="footer-copyright">
                    <div className="container">
                        <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
                    </div>
                </div>
            </footer>
            </div>
        );
    }
}
 
export default Footer;