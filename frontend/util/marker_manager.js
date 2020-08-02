export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};

        this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
    }

    createMarkerFromBench(bench) {
        new google.maps.Marker({
            position: {lat: bench.lat , lng: bench.lng},
            map: this.map,
            title: bench.description
            });this.createMarkerFromBench


    }

    removeMarkers(marker){
        this.markers[marker.benchId].setMap(null);
        delete this.markers[marker.benchId]
    }

    updateMarkers(benches) {
        const benchId = Object.keys(benches);
        benchId.forEach(id => {
            let newMarker = this.createMarkerFromBench(benches[id]);
            this.markers[id] = newMarker;
        })

        // for (benchId in benches){
        //     if (this.markers[benchId]){
        //         let newMarker = createMarkerFromBench(bench);
        //         this.markers[benchId] = newMarker;
        //     }
        // }
        // console.log(Object.keys(benches));

        // iterate through benches
        // if id is not in this.markers object
        // add to this.markers
        // add to map using helper method createMarkerFromBench(bench)
    }
    //...
}