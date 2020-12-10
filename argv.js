// console.log(process.env.PORT); 
// console.log(process.env.NODE_ENV); 

process.argv.forEach((val, index)=>{
    console.log(`${index}: ${val}`);
})

//minimist library deals with the key=value arguments
//need to use double dashes before each argument name: node argv.js --name=joe
const args = require('minimist')(process.argv.slice(2));

console.log("----------------------------------------");
for(let arg in args){
    console.log(`${arg}: ${args[arg]}`);
}

console.log("----------------------------------------");
for(let [key, value] of Object.entries(args)){
    console.log(`${key}: ${value}`);
}

console.log("----------------------------------------");
for(let key of Object.keys(args)){
    console.log(`${key}: ${args[key]}`);
}

console.log("----------------------------------------");
for(let value of Object.values(args)){
    console.log(value);
}