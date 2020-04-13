import React, { Component } from 'react';

const validation = (props) => {
    let validationMsg = "Test too short";
    if (props.inputlength > 5) {
        validationMsg = "Test long enogh";
    }
    return (
    <div >
        {
            <p>{validationMsg}</p>
        }
    </div>
);};

export default validation;