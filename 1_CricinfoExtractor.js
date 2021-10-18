// The purpose of this project is t extract information of worldcup 2019 from crickunfo and precent
// that is the form of excel and pdf scorecards
// the real purpose is to learn how to extract information and get experience
// A very good reason to ever make a project is to have good fun

// node 1_CricinfoExtractor.js --excel=Worldcup.csv --dataFolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

// npm init -y
// npm install minimist
// npm install axios
// npm install jsdom
// npm install excel4node
// npm install pdf-lib

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");

let args = minimist(process.argv);
// console.log(args.source);
// console.log(args.excel);
// console.log(args.dataFolder);

// download using axios
// extract information using jsdom
// manipulate data using array function
// save in excel using excel4node
// create folder and prepare pdfs

let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function(response){
    let html = response.data;
    
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    
    let matches = [];
    let matchScoreDivs = document.querySelectorAll("div.match-score-block");
    for(let i = 0; i < matchScoreDivs.length; i++){
        let match = {
        };

        let namePs = matchScoreDivs[i].querySelectorAll("p.name");
        match.t1 = namePs[0].textContent;
        match.t2 = namePs[1].textContent;

        let scoreSpans = matchScoreDivs[i].querySelectorAll("div.score-detail > span.score");
        if(scoreSpans.length == 2){
            match.t1s = scoreSpans[0].textContent;
            match.t2s = scoreSpans[1].textContent;
        }
        else if(scoreSpans.length == 1){
            match.t1s = scoreSpans[0].textContent;
            match.t2s = "";
        }
        else{
            match.t1s = "";
            match.t2s = "";
        }

        let spanResults = matchScoreDivs[i].querySelectorAll("div.status-text > span");
        match.result = spanResults[0].textContent;

        matches.push(match);
    }

    console.log(matches);
    let teams = [
        for( let i = 0; i <matches.length; i++){
            populateTeams(teams, matches[i]);
        }

    ];

    function populateTeams(matches, teams, match){
        let t1dx = teams.findIndex(function(team){
            if(team.name == match.t1){
                return true;
            }
            else{
                return false;
            }
        })

    }
    function populateMatchsTeams(teams, match)
    
}).catch(function(err){
    console.log(err);
})
