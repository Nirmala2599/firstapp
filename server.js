var http = require("http");
http
.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type": "text/html"});

    var url =req.url;
    console.log("URL:" + url);
    if(url === "/about") {
        res.write("<h1> about as page<h1>");
        res.end();

    }else if(url === "/contact") {
        res.write("<h1> Contact as page<h1>");
        res.end();
        
    }else{
    res.write("<h1>hello, GuviB46******<h1>");
    res.end();
    }
})
    .listen(3000, function() {
        console.log("Running  at  http://localhost:3000/");
    });
//     const express = require("express");
// const app =express();

// const port = 3010;
// app.get("/", (req, res) => {
//     res.send("Hello world from Node application!!");

// });
// app.listen(port, () => {
//     console.log("This Node application is running on port " + port);

// });