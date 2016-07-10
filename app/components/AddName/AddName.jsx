import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../Hello/HelloActionsCreator';

let AddName = ({ dispatch }) => {
    let input;

    let divStyle = {
        margin: '40px'
    };
    // style="{{margin: '40px'}}"

    return (
        <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(sayHello(input.value));
                    input.value = '';
                }}>
            <div >
                <input type="text" placeholder="enter a name" id="add-name" 
                       ref={ i => input = i }/>
                <button type="submit">
                    Add
                </button>
            </div>
        </form>
    );
};

AddName = connect()(AddName);

export default AddName;
