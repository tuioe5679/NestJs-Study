const http = require("http"); // http 객체 생성 
let count = 0;

// 서버 객체 생성 
const server = http.createServer((req, res) => {
    log(count);
    res.statusCode = 200;
    res.setHeader("Content-type","text/plain");
    res.write("hello\n");
    setTimeout(() => { // 비동기 함수 (2초후 실행)  
        res.end("Node.js")
    }, 2000);
});

function log(count) {
    console.log((count += 1));
};

server.listen(8000, () => console.log("Hello World"));