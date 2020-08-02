export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
        this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
    }

    createMarkerFromBench(bench) {
        new google.maps.Marker({
            position: {lat: bench.lat , lng: bench.lng},
            map: this.map,
            title: bench.description
            });this.createMarkerFromBench

            marker.addListner('click', () => this.handleClick(bench));
            this.markers[marker.benchId] = marker;

    }

    removeMarkers(marker){
        this.markers[marker.benchId].setMap(null);
        delete this.markers[marker.benchId];
    }

    updateMarkers(benches) {
        debugger
        const benchesObject = {};
        benches.forEach(bench => benchesObject[bench.id] = bench)
    
        // for (bench in benches){
        //     benchesObject[bench.id] = bench;
        //     if (!this.markers[bench.id]){
        //         this.createMarkerFromBench(bench, this.handleClick)
        //     }
        // }

        benches
        .filter(bench => !(this.markers[bench.id]))
        .forEach(bench => this.createMarkerFromBench(bench, this.handleClick))

        Object.values(this.markers)
        .filter(bench => !benchesObject[bench.id])
        .forEach(bench => this.removeMarkers(this.markers[bench.id]))
        // const benchId = Object.keys(benches);
        // benchId.forEach(id => {
        //     let newMarker = this.createMarkerFromBench(benches[id]);
        //     this.markers[id] = newMarker;
        // })

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