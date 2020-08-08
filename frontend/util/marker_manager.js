export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
        this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
    }

    createMarkerFromBench(bench) {
        const marker = new google.maps.Marker({
            position: {lat: bench.lat , lng: bench.lng},
            map: this.map,
            title: bench.description,
            id: bench.id
            });
            // this.createMarkerFromBench

            marker.addListener('click', () => this.handleClick(bench));
            // const { position, title, id, map } = ;
            this.markers[marker.id] = marker;


    }

    removeMarkers(marker){
        this.markers[marker.id].setMap(null);
        delete this.markers[marker.id];
    }

    updateMarkers(benches) {
        
        const benchesObject = {};
        // benches = benches[0] ? benches : [];
    
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
        // forEach on a empty array will not run the code
        
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