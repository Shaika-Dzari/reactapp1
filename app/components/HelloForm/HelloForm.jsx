import React, { PropTypes } from 'react';
import HelloApp from '../Hello/HelloApp';
import AddName from '../AddName/AddName'

const HelloForm = () => (
    <div>
        <AddName />
        <HelloApp />
    </div>
);

export default HelloForm;
