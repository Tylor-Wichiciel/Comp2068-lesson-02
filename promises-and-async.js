console.clear();

// Callbacks
const washUp = () => {
    console.log('wash your hands');
}

const callMe = async name => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`What's for dinner, ${name}!!!`);

          return resolve();
        }, 2000);
    })
}
// setTimeout(name => {
//     console.log("Beef, it's what's for dinner");
    
//     callMe(name);
// }, 2000, 'Tylor Wichiciel');

// // Promises
// new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log("Beef, it's what's for dinner");
//         resolve();
//     }, 2000)
// })
// .then(() => callMe('Tylor Wichiciel'));

// Async/Await

const asyncFunc = async (name) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Beef, it's what's for dinner");
            resolve();
        })
    });

    await callMe(name);

    washUp();

};
asyncFunc('Tylor Wichiciel');

(async () => {
    console.log("I'm iffy about IFFEs")
})();