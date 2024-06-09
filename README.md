# react-todo-list-precourse

# Setting
## App.js
- root를 생성해 Main을 로드합니다.

## Main.jsx
- 생성됨과 동시에 hooks를 로드합니다 by. useTodoState 
- UI에 state와 기능들을 전달합니다.




# UI
## SubmitForm
- user에게 submit을 받는 input을 포함한 UI입니다.
- hooks에서 받아온 onSubmit으로 사용자의 submit을 감지하고 item을 추가해 state를 변경하도록 합니다.

## TodoList
- user가 입력한 todo를 화면에 그려줍니다.
- 앞의 체크박스를 체크하면 item의 completed 부분이 true로 변하며 state와 localstorage가 변경됩니다. 
- hooks에서 받아온 HandleToggleComplete로 이벤트를 감지하여 style도 취소선으로 변경됩니다.

## Footer
- lists를 확인하고 남은 개수를 보여줍니다.
- hooks에서 받아온 ShowCompletedToggle로 아래의 버튼을 눌렀을 시, condition(all, active, completed)에 따라 해당하는 아이템들만 보여주도록 했습니다.
- Clear Completed 버튼을 눌렀을 시, hooks에서 받아온 ClearCompleted로 state와 localstorage를 변경하였습니다.




# 기능
- Hooks를 통해 State를 관리하고 handlers에 부여해주는 방식으로 구현하였습니다.

## Hooks
### useTodoState
- 전체 아이템들을 관장하는 lists state를 관리합니다.
- item에 랜덤으로 부여되는 NewID를 가지고 있습니다.
- inputRef로 DOM을 관리합니다.
- handlers에게 state나 변수 기능들을 인수로 전달합니다.

## handlers
### HandleSubmit
- submit시 newTodo를 생성하고 input의 value를 받아 todoObject 형식으로 만들어 state와 localstorage에 전달합니다.
- 이후 SubmitForm을 다시 초기화 합니다.

### HandleDelete
- 아이템을 지웠을 시, filter를 거쳐 id와 일치하는 아이템을 지우고 state와 localstorage를 업데이트 합니다.

### HandleToggleComplete
- item 빈배열을 만들고 localstorage의 모든 아이템을 가져와 상태를 확인합니다.
- 클릭된(completed) 아이템만 취소선을 그어줍니다.

### ShowCompletedToggle
- Footer의 버튼들을 클릭하면 해당하는 condition을 받아옵니다.
- condition(all, active, completed)에 따라 보여줄 아이템들을 필터링합니다.
- 필터링한 아이템을 state와 localstorage에 반영합니다.

### ClearCompleted
- 완료된 항목들을 필터링합니다.
- 필터링한(clear)된 항목들을 state에 반영하고 localstorage에서 제거합니다.





# 느낀점
- module로 분리해서 작업하다보니 state 관리로 애를 많이 먹었습니다. 다른 쿠키즈들의 코드를 보면서 공부하여 hooks 라는 새로운 방식이 있음을 알게 되고 활용하여 한 곳에서 state와 DOM, 기능들을 관리하는 법을 배운 것 같아 얻어가는게 많은 과제였습니다.
