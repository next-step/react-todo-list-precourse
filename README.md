<h1> KAKAO Tech Campus 과제 : ✅ React-todo-list </h1>

<h2>✓ 구현된 기능들</h2>




<br>



<h2>☑️ 과제 제출 전 체크 리스트</h2>

- 터미널에서 `node --version` 을 실행하여 Node.js 버전이 18.17.1 이상 인지 확인한다.
- 아래 명령을 입력하여 패키지를 설치한 후 실행하는데 문제가 없어야 한다.

  ```
  npm install
  npm run start
  ``` 

<br>


<h2>⭐️ 과제 진행 요구 사항 ⭐️</h2>

- 미션은 <a href = "https://github.com/next-step/react-todo-list-precourse">할 일 목록</a> 저장소를 포크하고 클론하는 것으로 시작한다

- 기능을 구현하기 전 `README.md` 에 구현할 기능 목록을 정리해 추가한다.

- Git의 커밋 단위는 앞 단계에서 `README.md` 에 정리한 기능 목록 단위로 추가한다.

- <a href = "https://gist.github.com/stephenparish/9941e89d80e2bc58a153">AngularJS Git Commit Message Convention</a> 을 참고해 커밋 메세지를 작성한다.

- 자세한 과제 진행 방법은 미니과제 진행 가이드 문서를 참고한다.

<br>



<h2>📌 기능 요구 사항</h2>

하루 또는 한 주 동안의 할 일 목록을 업데이트하는 할 일 목록을 구현한다.

`React` 라이브러리를 사용하여 웹 앱으로 구현한다.


- 할 일을 추가하고 삭제할 수 있다.

  - 할 일을 추가할 때 사용자는 Enter 키나 추가 버튼을 사용하여 할 일을 목록에 추가할 수 있어야 한다.

  - 사용자가 아무것도 입력하지 않은 경우에는 할 일을 추가할 수 없다.

- 할 일의 목록을 볼 수 있다.

- 할 일의 완료 상태를 전환할 수 있다.

<h3> 선택 요구 사항</h3>

- 현재 진행 중인 할 일, 완료된 할 일, 모든 할 일을 필터링할 수 있다.

- 해야 할 일의 총 개수를 확인할 수 있다.

- 새로고침을 하여도 이전에 작성한 데이터는 유지되어야 한다.


<br>



<h2>프로그래밍 요구 사항 1</h2>

- `Node.js 18.17.1` 버전과 `React 18` 에서 실행 가능해야 한다.

- <a href = "https://ko.react.dev/">React 공식 문서</a> 를 참고하여 구현한다.

- 프로그램 실행의 시작점은 `App.js` 이다.

- `package.json` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.

- 프로그램 종료 시 `process.exit()` 를 호출하지 않는다.

- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.

<br>


<h2>프로그래밍 요구 사항 2 </h2>

- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 <a href="https://github.com/airbnb/javascript">Airbnb JavaScript Style Guide</a> 를 원칙으로 한다.

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.

- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.

- import 문을 사용하여 스크립트를 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules">모듈화</a> 하여 가져올 수 있도록 한다.

<br>


<h2>프로그래밍 요구 사항 3 </h2>

- 함수(또는 메서드)의 길이가 15 라인을 넘어가지 않도록 구현한다.

- 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.

- 원하는 경우 `TypeScript` 로 구현한다.
