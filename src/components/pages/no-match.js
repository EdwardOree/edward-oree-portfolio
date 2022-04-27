import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NoMatch extends Component {
    render() {
        return (
            <div>
                <h2>We could not find that page</h2>
                <Link to="/">Return to homepage</Link>
            </div>
        );
    }
}