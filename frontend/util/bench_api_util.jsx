export const fetchBenches = () => {
    return $.ajax({
        method: 'GET' ,
            url: '/api/session',
        error: (err) => console.log(err)
    })
}

// export const postBenches = (bench) => (
//     $.ajax({
//         method: 'POST',
//         url: '/api/benches',
//         data: {bench}
//     })
// )