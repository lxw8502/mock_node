const http = require("http");

const app = http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "text/html;charset=UTF-8"});
    res.end("hello world");
});

app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
});

