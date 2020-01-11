import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

function Car2() {
    return <h2>Hi, I am also a Car!</h2>;
}

ReactDOM.render(<Car2/>, document.getElementById('root'));