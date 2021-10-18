// The purpose of this project is t extract information of worldcup 2019 from crickunfo and precent
// that is the form of excel and pdf scorecards
// the real purpose is to learn how to extract information and get experience
// A very good reason to ever make a project is to have good fun

// node 2_CricinfoExtractor.js --excel=Worldcup.csv --dataFolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

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
let fs = require("fs");
let path = require("path");

let args = minimist(process.argv);
// console.log(args.source);
// console.log(args.excel);
// console.log(args.dataFolder);

// download using axios
// extract information using jsdom
// manipulate data using array function
// save in excel using excel4node
// create folder and prepare pdfs

// browser => url to html (request to response)
let responseKaPromise = axios.get(args.source)
responseKaPromise.then(function(response){
    let html = response.data;
    // console.log(html);

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    // console.log(document.title);

    let matchScoreDivs = document.querySelectorAll("div.match-score-block");
    // console.log(matchScoreDivs.length);

    let matches = [];
    for(let i = 0; i < matchScoreDivs.length; i++){
        let match = {
            t1 : "",
            t2 : "",
            t1s : "",
            t2s : "",
            result : ""
        };

        let teamParas = matchScoreDivs[i].querySelectorAll("div.name-detail > p.name");
        match.t1 = teamParas[0].textContent;
        match.t2 = teamParas[1].textContent;

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

        let resultSpan = matchScoreDivs[i].querySelector("div.status-text > span");
        match.result = resultSpan.textContent;

        matches.push(match);
    }

    let matchesKaJSON = JSON.stringify(matches);
    fs.writeFileSync("matches.json", matchesKaJSON, "utf-8");

    let teams = [];
    // push teams in teams, if not already there
    for(let i = 0; i < matches.length; i++){
        pushTeaminTeamsIfNotAlreadyThere(teams, matches[i].t1);
        pushTeaminTeamsIfNotAlreadyThere(teams, matches[i].t2);

    }

    // push teams in teams, if not already there
    for(let i = 0; i < matches.length; i++){
        pushMatchInAppropriateTeam(teams, matches[i].t1, matches[i].t2, matches[i].t1s, matches[i].t2s, result);
       
    }

    for(let i = 0; i < matches.length; i++){
        pushMatchInAppropriateTeam(teams, matches[i].t2, matches[i].t1, matches[i].t2s, matches[i].t1s, result);
       
    }

    let teamskaJSON = JSON.stringify(teams);
    fs.writeFileSync("matches.json", teamsKaJSON, "utf-8");

    function pushMatchInAppropriateTeam(teams, homeTeam, oppTeam, homeScore, oppScore, result){
        let t1idx = -1;
        for(let i = 0; i < matches.length; i++){
                if(teams[i].name == homeTeam){
                    t1idx = i;
                    break;
                }
    
            let team = teams[t1idx];
            team.matches.push({
                vs : oppTeam,
                selfScore: homeScore,
                oppScore: oppScore,
                result: result
            })

        
        }
    }
    
    function pushTeaminTeamsIfNotAlreadyThere(teams, teamName){
        let t1idx = -1;
        for(let i = 0; i < matches.length; i++){
            if(teams[i].name == teamName){
                t1idx = i;
                break;
            }
        }

        
        if(t1idx == -1){
            // matches.push({
            //     name : teamName,
            //     matches : []
            // })
            // // let team = {
            // //     name : teamName,
            // //     matches : []
            // // }

            let team = teams[t1idx];
            team.matches.push({
                name : teamName,
                matches : []
            })
        }
    }
    


});