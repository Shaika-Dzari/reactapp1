import React, { PropTypes } from 'react'

const Hello = ({names}) => {
    let nameValues = names.join();
    return (
        <span>Hello : {nameValues}</span>
    );
};



export default Hello;
