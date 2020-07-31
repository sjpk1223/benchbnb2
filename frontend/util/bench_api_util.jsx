export const fetchBenches = (bounds) => {
    return $.ajax({
        method: 'GET' ,
        url: '/api/benches',
        error: (err) => console.log(err),
        data: { bounds }
    })
}

// export const postBenches = (bench) => (
//     $.ajax({
//         method: 'POST',
//         url: '/api/benches',
//         data: {bench}
//     })
// )


// let bounds = { northEast: { lat: '100', lng: '100' }, southWest: { lat: '-100', lng: '-100'}}