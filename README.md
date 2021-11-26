# SOPTOON-Server
29th SOPT Client-Server 합동 세미나 - 네이버 웹툰

### 💡 API 명세서
> [API 명세서 최종](https://www.notion.so/storypanda/API-24bb15fb98b74242a1e9e3c593e23bb6)

### 📋 Model Diagram
<img src = "https://user-images.githubusercontent.com/20807197/143522994-35a9db64-0f49-44df-9ae2-6357ea40cd99.png" width="500px" height="400px" />

### 🛠 Development Environment
<img src="https://img.shields.io/badge/Node.js-v16-green"/> <img src="https://img.shields.io/badge/Express-v4.16.1-green"/> <img src="https://img.shields.io/badge/PostgreSQL-v12.5-blue"/> <img src="https://img.shields.io/badge/Firebase-v9.23-blue"/>

### ⚙️ Dependencies Module
```
"dependencies": {
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "eslint-config-prettier": "^8.3.0",
    "express": "^4.17.1",
    "firebase-admin": "^9.8.0",
    "firebase-functions": "^3.14.1",
    "helmet": "^4.6.0",
    "hpp": "^0.2.3",
    "lodash": "^4.17.21",
    "pg": "^8.7.1"
  },
"devDependencies": {
    "eslint": "^7.6.0",
    "eslint-config-google": "^0.14.0",
    "firebase-functions-test": "^0.2.0"
  }
 ```
 
### 📁 Foldering

``` javascript

📁 functions _ 
            |_ 📁 api _ 
		    |         |_ 📋 index.js
		    |         |_ 📁 routes _
		    |                      |_ 📋 index.js
		    |                      |_ 📁 webtoon _
            |                                    |_ 📋 index.js
            |                                    |_ 📋 recommentGET.js
            |
			|                      |_ 📁 comment _
            |                                    |_ 📋 index.js
            |                                    |_ 📋 commentGET.js
            |                                    |_ 📋 commentPOST.js
            |                                    |_ 📋 bestCommentGET.js
			|
            |_ 📁 constants _ 
			|               |_ 📋responseMessage.js
		    |               |_ 📋 statusCode.js
			|
			|_ 📁 lib _ 
		    |		   |_ 📋 util.js
            |
			|_ 📁 db _
                      |_ 📋 index.js
                      |_ 📋 db.js
                      |_ 📋 comment.js
                      |_ 📋 webtoon.js                 

```



### 📌 Branch Strategy

<details>
<summary>Git Workflow</summary>
<div markdown="1">       

```
 1. local - feature에서 각자 기능 작업
 2. 작업 완료 후 remote-develop 에 PR
 4. 코드 리뷰 후 Confirm 받고 Merge
 5. remote - develop 에 Merge 될 때 마다 모든 팀원 remote - develop pull 받아 최신 상태 유지
 ```

</div>
</details>

| Branch Name | 설명 |
| :---: | :-----: |
| main | 초기 세팅 존재 |
| develop | 로컬 develop merge 브랜치 |
| BranchName_feature/#issue | 개인 기능 추가 브랜치 |

### 🙋🏻‍♀️ 담당

| API | 담당자 | 완료 여부 |
| :-----: | :---: | :---: |
| 전체 댓글 조회 | 채정아 | 완료 |
| 베스트 댓글 조회 | 채정아 | 완료 |
| 홈 뷰 추천 웹툰 조회 | 조재호 | 완료 |
| 댓글 작성 | 조재호 | 완료 |

### 📌 Commit Convention

**[태그] 제목의 형태**

| 태그 이름| 설명 |
| :--: | :-----: |
| feat | 새로운 기능을 추가할 경우 |
| fix | 버그를 고친 경우 |
| !BREAKING CHANGE | 커다란 API 변경의 경우 |
| !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |
| style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| comment | 필요한 주석 추가 및 변경 |
| docs | 문서를 수정한 경우 (ex. README 수정) |
| rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업인 경우 |
| remove | 파일을 삭제하는 작업만 수행한 경우 |
| chore | 빌드 태스크 업데이트, 패키지 매니저를 설정하는 경우 |

### 📌 Coding Convention

<details>
<summary>변수명</summary>   
<div markdown="1">       
      
 
 1. Camel Case 사용 
   - lower Camel Case
 2. 함수의 경우 동사+명사 사용 
   - ex) getInformation()
 3. 약어는 되도록 사용하지 않는다.
 
</div>
</details>


<details>
<summary>주석</summary>
<div markdown="1">       
  
 1. 주석은 /** */ 를 사용한다.
 
</div>
</details>

<details>
<summary>Bracket</summary>
<div markdown="1">       

 ``` javascript
 // 한줄 if 문 - 여러 줄로 작성
  if(trigger) {
    return;
  }
 ```
 ``` javascript 
 // 괄호 사용 한칸 띄우고 사용한다.
  if (left == true) {
     return;
  }
 ```
 ``` javascript 
 // 띄어쓰기
  if (a == 5) { // 양쪽 사이로 띄어쓰기
     return;  
  }
 ```
 
</div>
</details>

<details>
<summary>비동기 함수의 사용</summary>
<div markdown="1">       

 1. async, await 함수 사용을 지향한다.
 
</div>
</details>
