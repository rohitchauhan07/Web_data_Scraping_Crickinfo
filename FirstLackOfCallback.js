// t1 = Read a file(disk)
// t2 = Calculate primes(cpu)
// t3 = write a file(disk)
// t4 = Calcultate square of prime(cpu)
// node FirstLackOfCallback.js --source=f1.txt --dest=f2.txt --n=50000

function IsPrime(x){
    let isprime = true;

    for(let div = 2; div * div < x; div++){
        if(x % div == 0){
            isPrime = false;
            break;
        }
    }

    return isprime;
}

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);
// console.log(args.source);
// console.log(args.dest);
// console.log(args.n);

// //task 1 area brgins
let t1 = Date.now() 
console.log("Starting task 1 at " + t1 % 100000);

let data = fs.readFileSync(args.source);


let t2 = Date.now() 
console.log("Finishing task 1 at " + t1 % 100000);
console.log(t2 - t1);
// //task 1 area ends

//task 2 area brgins
let t3 = Date.now() 
console.log("Starting task 2 at " + t3 % 100000);

let arr = [];
for(let i = 2; i < args.n; i++){
    let isPrime = IsPrime(i);
    if(isPrime = true){
        arr.push(i);
    }
}

let t4 = Date.now() 
console.log("Finishing task 2 at " + t4 % 100000);
console.log(t4 - t3);
//task 2 area ends

console.log(t4 - t1);