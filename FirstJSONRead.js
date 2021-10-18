// node FirstJSONRead.js --source=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);
// console.log(args.source);

fs.readFile(args.source, "utf-8", function(err, json){
    if(err){
        console.log(err);
    }
    else{
        // console.log(json);

        //JSON se waapis JSO banan hoga
        let teams = JSON.parse(json); // JSON to JSO so that you can manipulate object
        console.log(teams[2].matches[1].vs);
    }
})


// lecture date - 1 oct 2021
//JSO
// if you want to print or save a JSO, Convert the JSO to JSON using JSON.stringify
// if you want to manipulate a JSON, Convert the JSON to JSO using JSON.parse