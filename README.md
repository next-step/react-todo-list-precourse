# react-todo-list-precourse

## 프로젝트 설명

### Abstract
> 할 일을 관리할 수 있는 프로젝트

### User Story
- 사용자는 인풋에 내용을 입력한 후 엔터키를 눌러 할 일을 추가할 수 있다.
- 사용자는 리스트의 왼쪽 하단에서 몇 개의 미완료된 할 일이 남았는지 확인할 수 있다.
- 사용자는 All/Active/Completed 버튼을 통해 할 일을 분류하여 볼 수 있다.
- 사용자는 Clear Completed 버튼을 클릭하여 완료된 할 일을 제거할 수 있다.
- 사용자는 할 일 목록의 체크박스를 통해 할 일을 완료/미완료 처리할 수 있다.
- 사용자는 할 일 목록 오른쪽의 x 버튼을 통해 할 일을 제거할 수 있다.
- 사용자는 인풋 왼쪽의 `v` 버튼을 눌러 모든 할 일을 완료/미완료 처리할 수 있다.

## 구현할 기능 목록

### Components
- Initial Setup
  - Entry point 설정
  - title 추가
- MainContainer
  - 제목, 푸터 구현
- Todo
  - id, isCompleted, content property를 갖는 클래스
- TodoContainer
  - 할 일 객체를 담는 todos라는 state (id => Todo)
  - 할 일을 추가할 수 있는 콜백
  - 할 일을 완료처리 할 수 있는 콜백
  - 할 일을 제거할 수 있는 콜백
  - todo 정렬 기능(All/Active/Completed)
  - clear completed 기능
  - TodoInput component 작성
    - 엔터키 입력시 input 내의 내용을 todo로 추가
    - 부모에서 prop으로 전달된 callback 이용
  - 전체선택 버튼
    - v버튼을 클릭 시 모든 할 일을 미완료/완료 처리
  - todos를 순회하며 TodoItem 출력
- TodoItem
  - 완료 여부를 변경할 수 있는 체크박스
  - hover시 우측에 x 버튼이 뜨도록 구현
  - x 버튼 클릭 시 할 일 제거

### 기능 추가
> 못 할 줄 알았는데..

생각보다 할 만 할것같아서 하게 됐다..

브라우저의 세션이 종료되기 전까지 데이터를 보존하면 되므로, 새로고침에만 영향을 받지 않는 sessionStorage를 사용하기로 했다.

- MainContainer의 default State를 sessionStorage에서 json형태로 load
- todos가 업데이트 될 때 sessionStorage에 JSON 형태로 저장
- nextId의 경우 todo와는 별도의 공간에 저장
