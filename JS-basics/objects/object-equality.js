let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 't')

//constructor function
function Address(street, city, zipCode){ 
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

function areEqual(address1, address2){
    for (let key in address1)
        if(address1[key] !== address2[key]) 
            return false
    
    return true
}

function areSame(address1, address2){
    return address1 === address2
}

areEqual(address1, address2)
areSame(address1, address2)