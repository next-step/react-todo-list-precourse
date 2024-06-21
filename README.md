# 📖할 일 목록 - 미니과제
카카오 테크 캠퍼스 2차 미니 과제 <br/>
[React 공식 문서](https://ko.react.dev/)와 [TodoMVC](https://todomvc.com/examples/react/dist/)의 기능 동작을 참고하여 원하는 대로 UI를 자유롭게 만든다.

Node.js 18.17.1 버전에서 실행 가능해야 한다. <br/>
`package.json` 파일은 변경할 수 없으며, __제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.__ <br/>
프로그램 종료 시 `process.exit()` 를 호출하지 않는다. <br/>
프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
<br/>

자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다. <br/>
기본적으로 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)를 원칙으로 한다.<br/>
indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.<br/>
&emsp; - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.<br/>
힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.<br/>
함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.<br/>
`import` 문을 사용하여 스크립트를 [모듈화](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)하여 가져올 수 있도록 한다.

<br/>
함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.<br/>
&emsp; - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.<br/>
원하는 경우 TypeScript로 코드를 작성한다.<br/>

## Prerequisites
```
npm: >= 9.8.1
node: >= 18.18.0
```
## How to Start
```
cd my_folder
git clone https://github.com/JaeanHan/react-todo-list-precourse.git change_repo_name
```
## Installation
```
npm i
npm run start
```
## Features
- 기능 요구 사항
  - [x] 할 일을 추가하고 삭제할 수 있다.
    - [x] 할 일을 추가할 때 사용자는 Enter 키나 추가 버튼을 사용하여 할 일을 목록에 추가할 수 있어야 한다.
    - [x] 사용자가 아무것도 입력하지 않은 경우에는 할 일을 추가할 수 없다.
  - [x] 할 일의 목록을 볼 수 있다.
  - [x] 할 일의 완료 상태를 전환할 수 있다.
- 선택 요구 사항
  - [x] 현재 진행 중인 할 일, 완료된 할 일, 모든 한 일을 필터링할 수 있다.
  - [x] 해야 할 일의 총 개수를 확인할 수 있다.
  - [x] 새로고침을 하여도 이전에 작성한 데이터는 유지되어야 한다.
- 추가 기능
  - [x] 대기중인 할 일을 수정할 수 있다.
  - [x] 드래그앤드롭을 통해 할 일의 순서를 바꿀 수 있다.
## 실행결과
![1](./public/1-1.gif)
<br/>
![할 일 수정](./public/2.gif)
<br/>
![드래그앤드롭](./public/3.gif)
## Credit
**한재안**
- GitHub : [@JaeanHan](https://github.com/JaeanHan)
