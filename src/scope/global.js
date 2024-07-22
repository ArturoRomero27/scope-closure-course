// variables

var a; // declarando 
var b = "b" // declaramos y asignamos 
b = 'bb'; // rasignacion
var a = 'aa'; // redeclaracion 

// Global scope

var fruit = 'apple' // global

function bestFruit() {
    console.log(fruit);
    
}

bestFruit(); 

function countries() {
    country = 'Colombia'; // global

    console.log(country);
    
}

countries()
console.log(country);