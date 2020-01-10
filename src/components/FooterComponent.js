import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="/home">Home</Link></li>
                            <li className="list-inline-item"><Link to="/foodguide">Food</Link></li>
                            <li className="list-inline-item"><Link to="/housing">Housing</Link></li>
                            <li className="list-inline-item"><Link to="/socializing">Socializing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;