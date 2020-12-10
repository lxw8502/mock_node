const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("event", function(){
    console.log("an event occured");
});

emitter.emit("event");

// pass arguments

emitter.on("pass", function(arg){
    console.log("passing argument: " + arg)
});

emitter.emit("pass", "hello");

// handle error
emitter.on("error", function(err){
    console.log("whoops, there is an error!");
});

emitter.emit("error");



