const http = require("http");
const url = require("url");

http.createServer((req,res) => {
    const path = url.parse(req.url,true).pathname;
    res.setHeader("Content-Type","text/html");

    if(path == "/user"){
        res.end("[user] name: JS age: 0");
    }else if(path == "/list"){
        res.end(`<ul>
        <li>리스트1</li>
        <li>list1</li>
        <li>list1</li>
        </ul>`);
    }else{
        res.statusCode = 404;
        res.end("404 page not found");
    }
}).listen("3000", () => console.log("라우터"));