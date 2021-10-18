// npm install --save pdf-lib
// npm install minimist
// node FirstWrittingPDF.js --source=teams.json --dest=worldcup

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");

let args = minimist(process.argv);
// console.log(args.source);
// console.log(args.dest);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest);
for(let i = 0; i < teams.length; i++){
    let teamsFN = path.join(args.dest, teams[i].name);
    fs.mkdirSync(teamsFN);
    for(let j = 0; j < teams[i].matches.length; j++){
        let matchFileName = path.join(teamsFN, teams[i].matches[j].vs + ".pdf");
        createScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
    }
    
}

function createScoreCard(teamName, match, matchFileName){
    // this fn create pdf for match in appropriate folder with correct details
    // here we will use pdf-lib to create the pdf

    // console.log(teamsName);
    // console.log(matches.vs);
    // console.log(matches.result);
    // console.log(matchFileName);
    // console.log("-------------------------");

    let t1 = teamName;
    let t2 = match.vs;
    let result = t1 + " " + match.result

    let pdfDocument = pdf.PDFDocument;
    let orignalBytes = fs.readFileSync("Template.pdf");
    let promiseToLoadBytes = pdf.PDFDocument.load(orignalBytes);
    promiseToLoadBytes.then(function(pdfDoc){
        let page = pdfDoc.getPage(0);
        page.drawText(t1, {
            x : 320,
            y : 725,
            size : 10
        });
        page.drawText(t2, {
            x : 320,
            y : 712,
            size : 10
        });
        page.drawText(result, {
            x : 320,
            y : 698,
            size : 10
        });
        let promiseTosave = pdfDoc.save();
        promiseTosave.then(function(changedByte){
            fs.writeFileSync(matchFileName, changedByte);
        })
    })


}