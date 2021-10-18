// npm install jsdom
// node FirstProcessingHTML.js --source=download.html

let minimist = require("minimist");
let fs = require("fs");
let jsdom = require("jsdom");
// will load html and prepare the dom for programmer just like the browser would have

let args = minimist(process.argv);
// console.log(args.source);

fs.readFile(args.source, "utf-8", function(err, html){

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    
    let descs = document.querySelectorAll(".match-info > .description");
    //we will get all div's with description whose parent div is match-info
    for(let i = 0; i < descs.length; i++){
        console.log(descs[i].textContent);
    }
});


