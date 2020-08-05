export const fetchBenches = (bounds) => {
    return $.ajax({
        method: 'GET' ,
        url: `/api/benches`,
        error: (err) => console.log(err),
        data:  bounds
    })
}

export const postBench = (bench) => (
    $.ajax({
        method: 'POST',
        url: `/api/benches`,
        data: {benchForm}
    })
)

export const fetchBench = (benchId) => {
    
    return $.ajax({
        url: `/api/benches/${benchId}`
    })
}

// let bounds = { northEast: { lat: '100', lng: '100' }, southWest: { lat: '-100', lng: '-100'}}