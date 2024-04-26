# Express (익스프레스)

### Express 설치 하기 
```
$ npm install express
-----------------------------------
added 64 packages in 3s

12 packages are looking for funding
  run `npm fund` for details
```
### 설치 확인 하기 
```
$ ls 
node_modules  
package-lock.json  
package.json
```

### Express 서버 구현 
<hr>

1. ```const express = require("express")```
> express 패키지를 로딩하여 변수 express에 할당 
2. ```const app = express()```
> express()를 실행하여 인스턴스를 만들어 app에 할당 
3. ```app.get("/",(req,res) => {});```
> express의 내장함수 get을 사용하여 url의 path는 "/"으로 설정하고 http 메서드가 get일 경우 실행 하는 함수 
4. ```res.set({"Content-Type": "text/html;charset=utf-8"});```
> 반환할 컨텐츠의 정보를 설정 (html,utf-8)
5. ```app.listen(port, ()=>{});```
> express의 listen 함수를 통해 서버를 기동하고 클라이언트의 요청을 기다림 (prot=3000)