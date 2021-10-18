// var a = [1,2,3,"mohit"]
// console.log(typeof(a[3]));

// output 

// console.log("Hello world");
// console.log("Hello world");

// varialble

// let i = 10;
// console.log(i);

// i = "hello world";
// console.log(i);

// i = true;
// console.log(i);

// input

let args = process.argv;
// console.log(args);

// let i = args[2];
// console.log(i);

// let j = parseInt("200", 10);
// console.log(j);
// j = j + 30;
// console.log(j);

// if else

// let clargs = process.argv;
// let n = parseInt(clargs[2]);
// if(n % 2 == 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// loop

// let clargs = process.argv;
// let n = parseInt(clargs[2]);

// for(let i = 1; i <= n; i++){
//     console.log(i);
// }

// isPrime

// let clargs = process.argv;
// let n = parseInt(clargs[2]);

// let isPrime = true;
// for(let i = 2; i * i <= n; div++){
//     if(n % i == 0){
//         isPrime = false;
//         break;
//     }

//     if(isPrime == true){
//         console.log(n + " is prime");
//     }
//     else{
//         console.log(n + " is not prime");
//     }
// }

// Pattern

let clargs = process.argv;
let n = parseInt(clargs[2]);

// let n = 5;

for(let i = 1; i <= n; i++){
    let line ="";
    for(let j = 1; j <= i; j++){
        line = line + "*\t";
    }
    
    console.log(line);
}

