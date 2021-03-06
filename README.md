# React-Spring_Board

- React.js와 Spring Boot를 활용한 게시판 만들기 연습 프로젝트

* 제작 기간 : 하루 2~3시간 총 2주

- 이 repo를 그대로 clone해서 실행하면 정상적으로 실행되지 않을 것입니다.

# Front 부분
Front부분에는 img와 key가 빠져있습니다.

img는 혹여나 발생할 수 있는 저작권문제를 피하기 위하여,
key는 요청 주소가 포함되어 있어 제외하였습니다.

# Backend 부분
Backend부분에는 application.properties 파일이 없습니다.
DB의 주소, 테이블명 계정정보가 포함되어있어 제외하였습니다.

# 이 게시판은 어디까지 구현되었습니까?
- 로그인, 회원가입 (아직, 회원가입시 아이디 중복확인 및 각 요소들의 유효성 검사기능은 아직 포함하지 않았습니다.)
- 개인정보수정 (수정페이지 진입 이전 본인확인용으로 비밀번호인증을 한번 더 합니다.)
- 일반적인 게시판의 작성, 읽기, 수정, 삭제가 구현되어있습니다.
- 게시판의 리스트는 오래된순부터 출력됩니다.
- 로그인 방식은 세션이 아닌 jwt를 활용하였습니다. jwt토큰은 세션스토리지에 저장됩니다.
- 최초 jwt 발급 후 유효기간은 30분입니다. 각 페이지 요청시마다 유효기간이 요청시점을 기준으로 30분 연장됩니다.
- 회원가입과 로그인 이외 모든 Backend요청은 jwt토큰이 필요합니다. 토큰이 유효하지 않으면 오류가 발생합니다.
- Spring과 DB간의 연결은 JPA를 사용하였습니다.
- Front를 담당하는 React의 사용 라이브러리는 Antd 입니다.
