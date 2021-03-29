const address = {
    street: 'Mustakillik', 
    city: 'Tashkent',
    zipCode: '10008'
}

function showAddress(obj){
    for (let key in obj)
        console.log(key, obj[key])
}

showAddress(address)