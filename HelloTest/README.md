### Hello World를 출력하는 Node.js 서버 <hr>
1. ```const http = require("http");``` 
> require 함수는 모듈을 읽어오는 함수 이며 http 모듈을 불러와 http 변수에 할당

2. ```http.createServer((req, res) => {});```
> createServer 함수는 서버 인스턴스를 만들고 Node.js의 http 서버를 생성하는데 사용되며 요청을 수신하고 처리할수 있습니다 <br> 인자값으로 "(req,res)" 콜백함수 를 받게됩니다 

`"req,res"는 Node.js에서 HTTP 요청과 응답을 나타내는 객체입니다`

#### req(request)
클라이언트로 부터 받은 요청에 대한 정보를 포함하고 있으며 URL,HTTP 헤더,메소드(GET,POST)등이 있습니다 <br>
creatServer 함수의 첫번째 인자값으로 받습니다 

#### res(response)
클라이언트에 보낼 응답을 작성하고 전송하는데 사용됩니다 
응답 상태 코드,헤더,응답 본문등을 설정할 수있습니다 <br> 
createServer 함수의 두번째 인자값으로 받습니다 

3. ```res.statusCode = 200;```
> 요청에 따른 상태코드를 200으로 설정 `200은 성공을 의미` 


#### 상태코드 
|코드|메시지|설명|
|---|-----|------|
|200|OK|요청 처리 성공|
|301|Moved Permanently|요구한 데이터를 변경한 URL에서 찾음|
|304|Not modified|클라이언트의 캐이세 저장되어 있음|
|400|Bad Request|요청 실패 클라이언트에 문제가 있음|
|403|Forbidden|접근 금지|
|404|Not Found|페이지를 찾을수 없음|
|405|Method not allowed|요청한 메소드가 허용되어 있지 않음|
|408|Request timeout|요청 시간이 지남|
|500|Internal Server Error|서버 에러| 
|501|Not Implemented|필요한 기능이 서버에 구현되어 있지 않음|
|502|Bad getway|게이트웨이 상태가 좋지 않음|
|503|Service Unavailalbe|서버가 사용 불가 상태임|

4. ```res.setHeader("Content-Type","text/plain")```
> HTTP에서 요청/응답에 대한 부가정보를 <a href="https://jeongzero.oopy.io/8082c06c-352a-44c2-8f07-e9fd68b99361">header</a>에 설정할수있습니다 <br> 콘텐츠 타입을 'text/plain"으로 설정하여 "텍스트를 평문으로 해석" 하게 됩니다 <br> `ex) Accept,Accept-Charset,User-Agent,Refere`

5. ```res.write("hello\n")```
> 응답으로 "hello\n"을 보냄 

6. ```setTimeout(() => {res.end("Node.js")},2000);```
> setTimeout 함수는 비동기적 작업을 수행할수 있도록 하는 타미머 함수 <br> 지정한 시간이 지난후 특정 작업을 수행할수 있도록 합니다 <br> 2초뒤 "Node.js" 응답을 주고 http 커넥션을 끝냄 

7. ```server.listen(8000, () => console.log("Hello World"));```
> 사용할 포트번호를 8000으로 설정하고 "Hello World"를 콘솔에 출력 (IP는 기본값으로 localhost,127.0.0.1)
