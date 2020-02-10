import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class LogIn extends Component {
    state = {

    }

    handleChange = (e) => {
        console.log(e)
    }

    handleSubmit = (e) => {
        console.log(e)
    }

    render() {
        return (
            <div className="container pageContainer">
                <Fade up>
                    <h1 className="text-center">Login</h1>
                </Fade>
                <Fade>
                    <form onSubmit={this.handleSubmit} className="col-5">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Login</button>
                        <button type="submit" className="btn btn-secondary mb-2 ml-2">SignUp</button>
                    </form>
                </Fade>
            </div>

        );
    }
}

export default LogIn;

