import React from 'react';
import { Link } from 'react-router-dom';

class BenchIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        this.props.clearEntity();
        this.props.history.push('./benches/' + this.props.id )
    }

    render() {
       
        return (
        <li>{this.props.bench.description}</li>
        )
    }
}
export default BenchIndexItem;