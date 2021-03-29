//factory function
function createAddress(street, city, zipCode){ // name - CamelCase
    return {
        street,
        city,
        zipCode,
        showAddress(){
            console.log(`Address: ${street}, ${city}, ${zipCode}`)
        }
    }
}

let address = createAddress('a', 'b', 'c')
console.log(address)

//constructor function
function Another(street, city, zipCode){ //name of the func - Pascal method
    this.street = street
    this.city = city
    this.zipCode = zipCode
    this.showAddress = function(){
        console.log(`Address: ${this.street}, ${this.city}, ${this.zipCode}`)
    }
}
let anotherAddress = /*NEVER FORGET THE "NEW" KEYWORD*/ new Another('a', 'b', 'c') 
console.log(anotherAddress.showAddress())