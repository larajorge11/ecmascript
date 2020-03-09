//////////////////////////////////////
const data = {
    frontend : 'Jorge',
    backend : 'Davor',
    design : 'Brandon',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//////////////////////////////////////
const data2 = {
    frontend : 'Jorge',
    backend : 'Davor',
    design : 'Brandon',
}

const values = Object.values(data2);
console.log(values);
//////////////////////////////////////
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '------'));
//////////////////////////////////////
const obj = {
    name: 'Jorge',
}
//////////////////////////////////////
//ASYNC AWAIT
//
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
};

anotherFunction();

