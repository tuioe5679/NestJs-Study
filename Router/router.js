const http = require("http");
const url = require("url");

http.createServer((req,res) => {
    const path = url.parse(req.url,true).pathname;
    res.setHeader("Content-Type","text/html; charset=utf-8");
    if(path in urlMap){
        urlMap[path](req,res)   // urlMap에 path 가 있는지 확인 
    }else{
        notFound(req,res);
    }
}).listen("3000", () => console.log("라우터"));

const user = (req,res) => {
    res.end("[user] name: JS age: 0");
};

const feed = (req,res) => {
    res.end(`<ul>
    <li>리스트1</li>
    <li>list1</li>
    <li>list1</li>
    </ul>`);
};

const notFound = (req,res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};

const urlMap = {
    "/": (req,res) => res.end("HOME"),
    "/user": user,
    "/feed": feed,
};