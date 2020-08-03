import React from 'react';

class BenchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: '',
            seating: 6,
            lat: props.lat,
            lng: props.lng
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        const { description, seating, lat, lng } = this.state;
        return (
            <div>
                <h3>Create a Bench</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Description</label>
                <input type="text" value={description} onChange={this.update('description')}/>

                <label>Seating</label>
                <input type="number" value={seating} onChange={this.update('seating')} />

                <label>Latitude</label>
                <input type="text" value={lat} />

                <label>Longitude</label>
                <input type="text" value={lng}/>

                <input type="submit" value="Submit"/>
            </form>

            </div>
        );
    }
}

export default BenchForm;