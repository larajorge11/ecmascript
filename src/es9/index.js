import hello from "../es6/module";

// Operador de reposo
const obj = {
    name: 'Jorge',
    age: 30,
    country: 'Colombia'
};

let { name, ...all } = obj;
console.log(all);

// Propagacion
const obj2 = {
    name: 'Jorge',
    age: 30
}

const obj3 = {
    ...obj2,
    country : 'Colombia'
}
console.log(obj3);

// Promise Finally
// Se sabe cuando finaliza la promesa

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello world')
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    //.finally(() => console.log('Finalizo'))

// regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
