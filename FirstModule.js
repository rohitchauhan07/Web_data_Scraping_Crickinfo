// npm install minimist
let minimist = require('minimist');
let args = minimist(process.argv);

// let name = args.name;
// let age = args.age;

if(args.age > 30){
    console.log("Hello " + args.name + ". You must go home.");
}
else{
    console.log("Hello " + args.name + ". Where is the party tonight.");
}

// console.log(args);

// node FirstModule.js -x 4 -y 10
// node FirstModule.js --name="Rohit Chauhan" --age=18
