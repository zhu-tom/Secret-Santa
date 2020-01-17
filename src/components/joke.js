import React from 'react';
import ReactDOM from 'react-dom';

export default function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && 'none'}}>{props.question}</h3>
            <h3>{props.answer}</h3>
        </div>
    );
}