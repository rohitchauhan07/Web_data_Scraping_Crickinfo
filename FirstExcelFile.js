// npm init
// npm install minimist 
// npm install excel4node
// node FirstExcelFile.js --source=teams.json --dest=teams.csv

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
// teamsJSON = teamsJSON.toUpperCase();
// console.log(teamsJSON);
let teams = JSON.parse(teamsJSON);
// console.log(teams[2].matches[1].vs);
// console.log(teams[2].matches[1].result);

let wb = new excel.Workbook();
// let hs = wb.createStyle({
//     font: {
//         bold: true,
//         underline: true,
//         size: 15,
//         color: "red"
//     },

//   fill: {
//       type: "pattern",
//       patternType: "solid",
//       fgcolor:"green"
//     }

//   });

for(let i = 0; i < teams.length; i++){
   let sheet = wb.addWorksheet(teams[i].name);
   sheet.cell(1, 1).string("Rank")//.style(hs); remove comment to apply style remove comment from line 20 also
   sheet.cell(1, 2).number(teams[i].rank);
   sheet.cell(2, 1).string("Opponent")//.style(hs); remove comment to apply style
   sheet.cell(2, 2).string("Result")//.style(hs); remove comment to apply style
   

   for(let j = 0; j < teams[i].matches.length; j++){
       let vs = teams[i].matches[j].vs;
       let result = teams[i].matches[j].result;

       sheet.cell(j + 3, 1).string(vs);
       sheet.cell(j + 3, 2).string(result);
   }
}
wb.write(args.dest);

