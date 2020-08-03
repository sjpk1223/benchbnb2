import React from 'react';

class BenchShow extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchBench(this.props.match.params.benchId)
        debugger
    }

    render() {
        
        const bench = this.props ? this.props.bench : null ;
        const description = bench ? bench.description : null;
        debugger
        // the first time it renders it will throw error so 
    
        return (
            <div>
                <p> {description} </p>
            </div>
        )
    }
}

export default BenchShow;