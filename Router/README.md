### Routing (라우팅)<hr>
URL 경로에 따라서 다른 응답을 하는 기능을 라우팅이라고 한다 

> URL의 구조 

http://www.example.com:80/path/to/file.html?key1=value1#hash

`http`: protocol (프로토콜)

`www.example.com`: hostname (도메인 이름)

`80`: prot (포트번호)

`path/to/file.html`: pathname (웹 서버의 자원 경로)

`?key1=value1`: query (웹 서버에서 제공하는 매개변수)

`hash`: hash (북마크)

### 라우터 역활을 하는 서버
일반적으로 웹 서버 에서는 URL 경로에 따라서 다른 응답을 주는 역활을 하는데요 <br>
사용자가 입력한 URL 경로를 읽어 다른 응답을 주는 서버를 만들어 봅시다  

url 모듈을 통해서 URL 경로를 받아올수 있습니다 
> Node.js에서 제공되는 기본 모듈 중 하나 URL 문자열을 파싱하고 조작하는 데 사용됩니다

1. 서버를 담당하는 http, URL 경로를 받아오는 url 모듈을 받아 변수에 각각 할당합니다 

```
const http = require("http");
const url = require("url"); 
```

2. 서버를 생성하고 시작하여 3000 포트에 수신 받도록 합니다 
```
http.createServer((req,res) => {
    ...
}).listen("3000", () => console.log("라우터"));
```

3. url 모듈의 parse 함수를 통해 입력한 URL에서 pathname을 파싱하여 가져옵니다 
```
const path = url.parse(req.url,true).pathname;
```

url에서 파싱 가능한 항목입니다 여러가지 항목을 통해서 다양한 기능을 구현 가능할것 같습니다 

- **protocol**: URL의 프로토콜 부분을 나타냅니다 "http", "https" 등입니다
  
- **slashes**: true 또는 false 값을 가지며 URL에 슬래시("/")가 포함되어 있는지 여부를 나타냅니다
  
- **auth**: 인증 정보를 포함하는 부분입니다 "username:password" 형식입니다
  
- **host**: 호스트 부분을 나타냅니다 이 부분은 호스트명과 포트 번호를 포함합니다
  
- **port**: 포트 번호를 나타냅니다
  
- **hostname**: 호스트명을 나타냅니다
  
- **hash**: URL의 해시 부분을 나타냅니다 "#section"과 같은 형식입니다
  
- **search**: 쿼리 문자열을 나타냅니다 "?key=value" 형식입니다
  
- **query**: 쿼리 문자열을 객체로 변환한 형태입니다
  
- **pathname**: 경로 부분을 나타냅니다 "/path/to/resource" 형식입니다
  
- **path**: 경로 부분과 쿼리 문자열을 합친 형태입니다
  
- **href**: 전체 URL 문자열입니다

3. path 값에 따라서 다른 응답을 주도록 합니다 <br>

값이 "/user"이라면 user 정보를 간략하게 출력합니다 <br>
값이 "/list"이라면 list 정보를 간략하게 출력합니다 <br>
값이 모두 해당되지 않는다면 404 응답 코드를 보내고 페이지를 출력할수 없음을 영어로 출력합니다 <br> 
```
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
```

> 한글을 출력값으로 사용하면 한글이 깨지게 됩니다 이럴경우 charset 설정을 해줘야 합니다 <br>
> setHeader()의 인자값을 수정해줍니다 <br>
> ``` res.setHeader("Content-Type","text/html; charset=utf-8"); ```

### 라우터 리팩터링

모든 요청의 path 값을 분석하여 함수를 실행합니다 <br>
이러한 요청의 양이 많아진다면 유지보수하기가 힘들어 지기 때문에 유지 보수 측면의 리팩터링을 진행합니다 

1. 매개변수가 같은 패턴으로 사용되기 때문에 각 path에 맞는 함수 이름을 넣은 urlMap을 선언 하여 사용합니다 
```
const urlMap = {
    "/": (req,res) => res.end("HOME"),
    "/user": user,
    "/feed": feed,
};
```
2. 맵을 적용시켜 분기문 간략화  

```
if(path in urlMap){
    urlMap[path](req,res)   // urlMap에 path 가 있는지 확인 
}else{
    notFound(req,res);
}
```
> 객체와 함께 in 연산자를 사용하면 객체의 키가 있는지 검사합니다 
```(찾을키) in (객체)```

> urlMap[키] 키에 해당하는 값을 반환 
```urlMap[user] -> user(req,res) ```
