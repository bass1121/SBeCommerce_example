import React, { Component } from 'react';

export default class Account extends Component {

    renderContent() {
        return <h1></h1>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}