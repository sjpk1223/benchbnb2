import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component{
    constructor(props){
        super(props);
        // this.updateBounds = this.props.updateBounds.bind(this);
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
        this.filterBounds();
        // idle b/c we want to capture bounds when map is idle NOT bounds changed 
        // this is where we get our bounds from our front end!
    }

    filterBounds() {
        this.map.addListener('idle', () => {
            let latLongBnds = this.map.getBounds();
            let northEastLat = latLongBnds.getNorthEast().lat();
            let northEastLng = latLongBnds.getNorthEast().lng()
            let southWestLat = latLongBnds.getSouthWest().lat();
            let southWestLng = latLongBnds.getSouthWest().lng();
            let bounds = { southWest: { lat: southWestLat, lng: southWestLng }, northEast: { lat: northEastLat, lng: northEastLng } };
            this.props.updateBounds('bounds', bounds);
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

export default BenchMap;