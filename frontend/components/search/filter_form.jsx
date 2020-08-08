// import React from 'react';
// import { updateFilter } from '../../actions/benches_actions';
// //study parseInt

// class FilterForm extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             min_seating: "0",
//             max_seating: "10",

//         }
//     }
//     // parseInt just turns string into integer same as to_i in ruby
    
//     handleChange(seating){
//         e => {
//            this.setState({seating: e.currentTarget.value})
//             this.props.updateFilter(seating, parseInt(e.currentTarget.value))
//         };
//     }
    
//     render(){
//         return(
//             <div>
//                 <span>Filter results:</span>
// //              <br />
// //         <label>Minimum Seats</label>
// //         <input type="number" value={this.state.min_seating} onChange={this.handleChange("min_seating", this.props.updateFilter)} />
// //         <br />
// //         <label>Maximum Seats</label>
// //         <input type="number" value={this.state.max_seating} onChange={this.handleChange("max_seating", this.props.updateFilter)} />
//             </div>
//         )
//     }
// }
// const handleChange = (filter, updateFilter) => e => (
//     updateFilter(filter, parseInt(e.currentTarget.value))
// );

// const FilterForm = ({ min_seating, max_seating, updateFilter }) => (
//     <div>
//         <span>Filter results:</span>
//         <br />
//         <label>Minimum Seats</label>
//         <input type="number" value={min_seating} onChange={handleChange('min_seating', updateFilter)} />
//         <br />
//         <label>Maximum Seats</label>
//         <input type="number" value={max_seating} onChange={handleChange('max_seating', updateFilter)} />
//     </div>
// );

// export default FilterForm;

import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ min_seating, max_seating, updateFilter }) => (
    <div>
        <span className="filter">Filter results:</span>
        <br />
        <label>Minimum Seats</label>
        <input
            type="number"
            value={min_seating}
            onChange={handleChange('min_seating', updateFilter)}
        />
        <br />
        <label>Maximum Seats</label>
        <input
            type="number"
            value={max_seating}
            onChange={handleChange('max_seating', updateFilter)}
        />
    </div>
);

export default FilterForm;

