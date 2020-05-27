console.clear();
//Blocking (sync)
const sayHi = name => console.log(`Hello, ${name}`)
sayHi('Tylor');
sayHi('Chloe');
sayHi('George');

// Non-Blocking (async)
setTimeout(sayHi, 2500, 'Melvin');
setTimeout(sayHi, 1500, 'Moka');
setTimeout(sayHi, 3500, 'Bill');
sayHi('Jim');

// Callback
const farewell = name => console.log(`Goodbye, ${name}`);
const greeting = (name, callback) =>{
    console.log(`Hello, ${name}`);

    callback(name);
}

greeting("Tylor Wichiciel", farewell);
