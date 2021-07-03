
import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src="https://i.ibb.co/mG6967Z/todo2.png" alt="logo" />
                    </div>
                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <a href="/home">
                        <button type="button" className="btn">
                            Login
                        </button>
                    </a>
                </div>
            </div >
        );
    }
}
