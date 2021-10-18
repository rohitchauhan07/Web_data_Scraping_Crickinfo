// npm init
// npm install minimist 
// node FirstFolderCreation.js --source=teams.json --dest=root

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");

let args = minimist(process.argv);
let path = require("path");

let teamsJSON = fs.readFileSync(args.source, "utf-8");
// teamsJSON = teamsJSON.toUpperCase();
// console.log(teamsJSON);
let teams = JSON.parse(teamsJSON);
// console.log(teams[2].matches[1].vs);
// console.log(teams[2].matches[1].result);
// console.log(teams.length);


for(let i = 0; i < teams.length; i++){
  let folderName = path.join(args.dest, teams[i].name);   
  // fs.mkdirSync(args.dest + "/" + teams[i].name);
  fs.mkdirSync(folderName);
}


