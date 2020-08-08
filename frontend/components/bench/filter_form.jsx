import React from 'react';

const FilterForm = ({ minSeating, maxSeating }) => (
    <div>
        <label>Minimum Seats</label>
        <input
            type="number"
            value={minSeating}
        />
        <br />
        <label>Maximum Seats</label>
        <input
            type="number"
            value={maxSeating}
        />
    </div>
);

export default FilterForm;
