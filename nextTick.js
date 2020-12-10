const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

setImmediate(function(){
    console.log("setImmediate");
})

setTimeout(function(){
    console.log("setTimeout");
},0);

new Promise((resolve, reject)=>{
    resolve("resolve this promise")
}).then((res)=>{
    console.log(res);
});

process.nextTick(function(){
    console.log("nextTick");
});


fs.readFile('./static/1.jpg', function(err, data){
    setTimeout(function(){
        console.log("setTimeout in callback");
    }, 0);
    setImmediate(function(){
        console.log("setImmediate in callback");
    });
    new Promise((resolve, reject)=>{
        resolve("resolve this promise in callback")
    }).then((res)=>{
        console.log(res);
    });
    process.nextTick(function(){
        console.log("nextTick in callback")
    });
})