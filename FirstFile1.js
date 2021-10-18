// read from f1.txt, capitalize,
//node FirstFile1.js --source=f1.txt --dest=f2.txt
//Install Minimist -> npm install minimist

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

//read file f1.txt
let stext = fs.readFileSync(args.source, "utf-8");
//capatalization
let dtext = stext.toUpperCase();
//write to f2.txt
fs.writeFileSync(args.dest, dtext, "utf-8");

