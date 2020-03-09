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