import React, {Component} from 'react';

export default class About extends Component {
    render(){
        return (
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center text-white">
                <main role="main" className="inner cover">
                <h1 className="cover-heading">Create Notes</h1>
                <p className="lead">In this App you can create your User and then create any Notes you want! </p>
                <button type="button" class="btn btn-light">
                    <a href="https://mywebsite-24f67.web.app/">Visit my Portfolio</a>
                    </button>
                </main>
            </div>
        )
    }
}