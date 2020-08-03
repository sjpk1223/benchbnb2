import React from 'react';

class BenchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: '',
            seating: 0,
            lat: props.lat,
            lng: props.lng
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleSubmit(e){
        e.preventDefault(); // single page app so we need this to avoid error
        const formData = new FormData();
        formData.append('bench[description]', this.state.description);
        formData.append('bench[seating]', this.state.seating);
        formData.append('bench[lat]', this.state.lat);
        formData.append('bench[lng]', this.state.lng);
        this.props.createBench(formData);
        this.props.history.push(`/`); // redirects to


    }

    update(form){
        return e => this.setState({
            [form]: e.currentTarget.value 
        })
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