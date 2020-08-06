import React from 'react';
// import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        // set the map to show SF

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
        // Object.values(state.entities.benches)
        this.filterBounds();
        // idle b/c we want to capture bounds when map is idle NOT bounds changed 
        // this is where we get our bounds from our front end!
    }

    filterBounds() {
        this.map.addListener('idle', () => {
            let latLongBnds = this.map.getBounds();
            let northEastLat = latLongBnds.getNorthEast().lat();
            let northEastLng = latLongBnds.getNorthEast().lng();
            let southWestLat = latLongBnds.getSouthWest().lat();
            let southWestLng = latLongBnds.getSouthWest().lng();
            let bounds = { southWest: { lat: southWestLat, lng: southWestLng }, northEast: { lat: northEastLat, lng: northEastLng } };
            this.props.updateBounds(bounds);
        })
    }

    _handleClick(coords) {
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    registerListeners() {
        google.maps.event.addListner(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat:north, lng: east },
                southWest: { lat:south, lng: west } 
            }
            this.props.updateFilter('bounds', bounds);
        });

        google.maps.event.addListner(this.map, 'click', (event) => {
            const coords = getsCoordsObj(event.latLng);
            this._handleClick(coords);
        })
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    };

    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map}>

            </div>
        )
    }
}

// export default withRouter(BenchMap);
export default BenchMap;

// Since our BenchMap will need access to the Router, 
// import the withRouter function from react-router-dom.
// Change the export statement in bench_map.jsx so that we are 
// exporting a wrapped component.

// BenchMap component will now have a history(router) prop.