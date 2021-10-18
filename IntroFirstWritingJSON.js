// npm init
// npm install minimist
// node IntroFirstWritingJSON.js --dest=Introteams.json

let minimist = require("minimist");
let fs = require("fs");
const { Console } = require("console");

let args = minimist(process.argv);
// console.log(args.dest);

//JSON = javascript Object Notation
//JSON means saving data in the same format as of javascript objects

let s1 = {
    name : "Sumeet",
    age  : 34
};
//s1 is an object. name and age are properties / data members

// console.log(s1.name);
// console.log(s1.age);

let s2 = {
    name : "Moksh",
    age  : 25
};

let stdntWay1 = [s1, s2];// JSO  (Javascript Object)
// an array of objects which is again an object = JSO
let json = JSON.stringify(stdntWay1); // JSON (Javascript Object Notation)
fs.writeFileSync(args.dest, json, "utf-8");

let agesKaArr = [10, 20, 30];
console.log(agesKaArr[1]);
console.log(agesKaArr[0]);
console.log(agesKaArr[2]);

let nameskaArray = ["Sumeet", "Moksh", "Jasbir"];
console.log(nameskaArray[0]);
console.log(nameskaArray[1]);
console.log(nameskaArray[2]);

let arrOfObjects = [
    {
        name : "Sumeet",
        age : 34
    },

    {
        name : "Moksh",
        age: 25
    },

    {
        name : "Jasbir",
        age: 24
    }
];

console.log(arrOfObjects[0].name);
console.log(arrOfObjects[0].age);

console.log(arrOfObjects[1].name);
console.log(arrOfObjects[1].age);

console.log(arrOfObjects[2].name);
console.log(arrOfObjects[2].age);