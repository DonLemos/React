// import React, { Component } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function GitHubUser() {
    const { id } = useParams();
    const { login } = useParams();
    return (
        <div>
            <h1>User Login: {login}</h1>
            <h2>User Id: {id}</h2>
        </div>
    );
}
// class GitHubUser extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>User Login: {this.props.match.params.login}</h1>
//                 <h2>User Id: {this.props.match.params.id}</h2>`
//             </div>
//         );
//     }
// }

export default GitHubUser;