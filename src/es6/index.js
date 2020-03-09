function newFunction (name, age, country) {
    var name = name || 'jorge';
    var age = age || 30;
    var country = country || 'Colombia';

    console.log(name, age, country);
}

//es6
function newFunction2(name= 'Jorge', age= 32, country = 'CO'){
    console.log(name, age, country);
}

newFunction2();
newFunction2("DAVOR", "13", "CO");

//TEMPLATE LITERALS

let hello = 'hello';
let world = 'world';

let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);

//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//********************/
//MULTILINEAS

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \n' 
+'incididunt ut labore et dolore magna aliqua.'

//ES6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.
`
console.log(lorem);
console.log(lorem2);

//********************/
// DESESTRUCTURAR

let person = {
    'name': 'Jorge',
    'age': '30',
    'country':'CO'
}

console.log(person.name, person.age);

//ES6
let {name, age, country} = person;
console.log(name,age, country);

//********************/
// SPREAD OPERATOR

//ES6
let team1 = ['Jorge', 'Stefani', 'Davor'];
let team2 = ['Daniel', 'Omaira', 'Luna'];

let education = ['David', ...team1, ...team2];

console.log(education);

//********************/
// VAR vs LET

{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet); No se puede acceder

const a = 'b';  // No cambia su valor

//
let name = 'Jorge';
let age = 30;

obj = {name: name, age: age};

//ES6
obj2 = {name, age};
console.log(obj2);


//
const namesData = [
    {name: "Jorge", age:30},
    {name: "Stefani", age:31}
]

let listOfNames = namesData.map(function(item) {
    console.log(item.name);
})

//ES6
let listOfNames_2 = namesData.map(item => console.log(item.name));

const listOfNames_3 = (name, age) => {

}
// Solo un elemento
const listOfNames_4 = name => {

}

const square = num => num * num;


//PROMESAS
// Ascincronico
// La promesa es algo que va a pasar
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// CLASES
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(2,2));

// MODULOS
import { hello } from './module';
hello();

// GENERATOR
// Retorna una serie de valores

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
