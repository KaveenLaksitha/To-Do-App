import React from "react";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
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
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="password" />
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Register
                    </button>
                </div>
            </div>
        );
    }
}
