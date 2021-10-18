// npm init
// npm install minimist
// node FirstWritingJSON.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

let teams = [
    {
        name : "India",
        rank : 1,
        matches : [
            {
                vs : "Australia",
                result: "win"

            },
            {
                vs : "England",
                result: "win"

            }
        ]

    },

    {
        name : "Australia",
        rank : 2,
        matches : [
            {
                vs : "India",
                result: "loss"

            },
            {
                vs : "Australia",
                result: "win"

            }
        ]

    },

    {
        name : "England",
        rank : 3,
        matches : [
            {
                vs : "Australia",
                result: "loss"

            },
            {
                vs : "India",
                result: "loss"

            }
        ]

    }
];

// console.log(teams[2].matches[1].vs);

// JSO -> JSON
let json = JSON.stringify(teams); // convets JSO to JSON. JSO can't be printed or saved.It has to be conveted to json via JSON.stringify. so that it acn be printed or saved.
fs.writeFileSync(args.dest, json, "utf-8")

