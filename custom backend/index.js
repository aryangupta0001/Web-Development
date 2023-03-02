const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

const hostname = "127.0.0.1";
const port = 80;

const home = fs.readFileSync("./index.html")
const services = fs.readFileSync("./services.html")
const about = fs.readFileSync("./about.html")
const contact = fs.readFileSync("./contact.html")



const server = http.createServer((req, res) =>{
    console.log(req.url);
    
    res.statusCode = 200;
    res.setHeader("content-Type", "text/Html");

    if(req.url == "/"){
        res.end(home);
    }

    else if(req.url == "/services"){
        res.end(services)
    }

    else if(req.url == "/about"){
        res.end(about)
    }

    else if(req.url == "/contact"){
        res.end(contact)
    }
});

server.listen(port, hostname, () =>{
    console.log(`Server Running at http://${hostname}:${port}`);
});
