import React, { Component } from 'react';

let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Name: {props.name} and Age: {props.age} years</h3>
            <h4>Extra info: {props.children}</h4>
        </div>
    );
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         //console.log(this.props);
//         return (
//             <div>
//                 <h3>Name: {this.props.name} and Age: {this.props.age} years</h3>
//                 <h4>Extra info: {this.props.children}</h4>
//             </div>
//         );
//     }
// }
export default Person;