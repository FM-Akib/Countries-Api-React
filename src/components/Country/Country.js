import React from 'react';

const Country = (props) => {
    const {name}=props.country;
    return (
        <div>
            <h2>Name: {name.common}</h2>
        </div>
    );
};

export default Country;