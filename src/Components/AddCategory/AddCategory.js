import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCats }) => {

    const [inputVal, setInputVal] = useState('');
    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim().length > 2) {
            setCats(cats => [inputVal, ...cats]);
            setInputVal('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputVal}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCats: PropTypes.func.isRequired
}