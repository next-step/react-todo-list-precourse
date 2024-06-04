# 2차 미니과제 - TODO List 만들기 (React)

<table>
  <tr>
    <td align="center">
      <a href="https://www.github.com/jasper200207">
        <img src="https://github.com/jasper200207.png" width="80" alt="main manager"/>
        <br/><b>jasper200207</b>
      </a>
    </td>
  </tr>
</table>

## 사용 스택

<table>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />
    </td>
    <td align="center">
      v18
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white" />
    </td>
    <td align="center">
      v18.17.1
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/TypeScript-0769AD?style=flat-square&logo=TypeScript&logoColor=white" />
    </td>
    <td align="center" />
  </tr>
</table>

## 실행 방법

```bash
npm install
npm run start
```

## 작업 리스트

❗️는 필수 구현 사항

### Todo List UI 구성

- [ ] Todo Header
- [ ] Todo Footer
- [ ] ❗️Todo List
  - [ ] ❗️Todo Item
    - [ ] ❗️Todo Item 제목
    - [ ] ❗️Todo Item 상태 ( 완료, 진행중 )
    - [ ] ❗️Todo Item 삭제
    - [ ] ❗️Todo Item 생성
- [ ] Todo Detail
  - [ ] Todo Item 내용 ( 제목, 메모 )
  - [ ] Todo Item 삭제
  - [ ] Todo Item 수정 ( 제목, 메모, 상태 )
- [ ] Todo View 전환
  - [ ] Todo List View
  - [ ] Todo Grid View

### Todo List 기능 삽입

- [ ] ❗️Todo CRUD
  - [ ] ❗️Todo 생성
  - [ ] ❗️Todo 조회
  - [ ] ❗️Todo 수정 ( 상태 변경, 내용 변경 )
  - [ ] ❗️Todo 삭제 ( 단일 삭제, 전체 삭제 )
- [ ] Todo 목록 캐싱 ( 새로고침시에도 유지 )
- [ ] Todo 필터링
  - [ ] All, Todo, onProgress, Done ( 상태별 필터링 )
  - [ ] Drag & Drop can change status and order ( 상태 및 순서 변경 )
- [ ] Todo Deadline
  - [ ] Deadline 설정
  - [ ] 오늘 할일 + Deadline이 지난 목록 조회
  - [ ] Deadline 표시 ( D-Day 표시 )
- [ ] Todo 카테고리 CRUD
  - [ ] 카테고리 생성
  - [ ] 카테고리 조회
  - [ ] 카테고리 수정 ( 이름 변경, 색 변경 )
  - [ ] 카테고리 삭제
- [ ] Todo 카테고리 연결
  - [ ] 카테고리별 Todo 필터링
