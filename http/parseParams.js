const http = require('http');
const querystring = require('querystring');
// const parse = require('url').parse;

//path:  /pass/
const server = http.createServer((req, res)=>{
    const {url, method, headers} = req;
    if(url.startsWith("/pass") && method === "GET"){
        let reqUrl = new URL(url, `http://${headers.host}`);
        let sp = reqUrl.searchParams;
        console.log(reqUrl.pathname);     
        console.log(reqUrl);
        console.log(querystring.parse(reqUrl.search.slice(1)));
        console.log(querystring.parse(sp.toString())); 
 
        sp.forEach((key, value)=>{
            console.log(key, value)
        });

        for(let key of sp.keys()){
            console.log(key, sp.get(key));
        }
        for(let [key, value] of sp.entries()){
            console.log(key, value);
        }
    }
    // console.log(parse(url, true)); 

    res.end();
});

server.listen(3000);