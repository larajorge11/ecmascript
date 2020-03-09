let array = [1,2,3, [1,2,3, [1,2,3]]];

// valor de la profundidad
console.log(array.flat());
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

let hello2 = '          hello world';
console.log(hello2.trimStart());

let hello3 = 'hello world             ';
console.log(hello3.trimEnd());

// TRY AND CACTH WITHOUT error
// es7
try { }
catch (error) { console.log(error) }
// es10
try { }
catch { console.log(error) }

let entries = [["Jorge", "Davor"], ["Stefani", "Luna"]];
console.log(Object.fromEntries(entries));

// SYMBOL
let s = Symbol('Esta es la descripcion del simbolo')
console.log(s.description);