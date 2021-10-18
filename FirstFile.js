// read a file, capitlize every word, write the file
let minimist = require("minimist");
let args = minimist(process.argv);

// node FirstFile.js --source=f1.txt --dest=f2.txt

let fs = require("fs");
let stext = fs.readFileSync(args.source, "utf-8");
// console.log(stext);

let words = stext.split(" "); // string has split
// console.log(words);

for(let i = 0; i< words.length; i++){
    words[i] = words[i].toUpperCase();
}

let dtext = words.join(" "); // array has join with space
// console.log(dtext);
fs.writeFileSync(args.dest, dtext, "utf-8");