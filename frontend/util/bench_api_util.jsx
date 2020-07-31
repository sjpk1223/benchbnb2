export const fetchBenches = (filters) => {
    debugger
    return $.ajax({
        method: 'GET' ,
            url: '/api/benches',
        error: (err) => console.log(err),
        filters
    })
}

// export const postBenches = (bench) => (
//     $.ajax({
//         method: 'POST',
//         url: '/api/benches',
//         data: {bench}
//     })
// )