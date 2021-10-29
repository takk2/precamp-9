for(let i=0; i<3; i=i+1 ){
  console.log("안녕하세요!!!")
}
// 3VM208:2 안녕하세요!!!
// undefined
const classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
for(let i=0; i<3; i++){
  console.log(classmates[i])
}
// VM852:2 철수
// VM852:2 영희
// VM852:2 훈이
// undefined
for(let i=0; i<classmates.length; i++){
  console.log(classmates[i] + "입니다!!!")
}
// VM916:2 철수입니다!!!
// VM916:2 영희입니다!!!
// VM916:2 훈이입니다!!!
// undefined
// for는 반복문, if는 조건문
// undefined
//i+1을 i++로 대체 가능
// undefined
const classmates2 = [
  { name: "철수", age: 10, school: "다람쥐초등학교" },
  { name: "영희", age: 11, school: "공룡초등학교"}
]
// VM1360:3 Uncaught SyntaxError: Unexpected token '{'
const classmates2 = [
  { name: "철수", age: 10, school: "다람쥐초등학교" },
  { name: "영희", age: 11, school: "공룡초등학교" }
]
// VM1366:3 Uncaught SyntaxError: Unexpected token '{'  쉼표가 없어서 오류난거임... 다람쥐 초등학교')}, 이게 없었음...
const classmates2 = [
  { name: "철수", age: 10, school: "다람쥐초등학교" },
  { name: "영희", age: 11, school: "공룡초등학교" }
]
// undefined
classmates2[1]
// {name: '영희', age: 11, school: '공룡초등학교'}




// 실습
const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" }
]
// undefined
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i])
} 
  //이거는 그냥 내용들을 순서대로 배열한것!
//---결과---
// VM1793:2 {number: 1, title: '레드향'}
// VM1793:2 {number: 2, title: '샤인머스켓'}
// VM1793:2 {number: 3, title: '산청딸기'}
// VM1793:2 {number: 4, title: '한라봉'}
// VM1793:2 {number: 5, title: '사과'}
// VM1793:2 {number: 6, title: '애플망고'}
// VM1793:2 {number: 7, title: '딸기'}
// VM1793:2 {number: 8, title: '천혜향'}
// VM1793:2 {number: 9, title: '과일선물세트'}
// VM1793:2 {number: 10, title: '귤'}
// undefined
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i].number + " " + fruits[i].title)
} 
  // 이거는 fruits[i].number를 이용해 숫자를 배열하고 
  //문자열에 공백을 더해서 띄어쓰기를 만든다음에 fruits[i].title를 이용해서 과일명까지 배열한거
//---결과---
// VM2003:2 1 레드향 
// VM2003:2 2 샤인머스켓
// VM2003:2 3 산청딸기
// VM2003:2 4 한라봉
// VM2003:2 5 사과
// VM2003:2 6 애플망고
// VM2003:2 7 딸기
// VM2003:2 8 천혜향
// VM2003:2 9 과일선물세트
// VM2003:2 10 귤
// undefined


//반복문은 for, 조건문은 if




//랜덤수 만들기
undefined
Math.random()
// 0.9597154881713044
Math.random() * 1000000
// 462649.6355233316
// undefined
//소수점을 여섯칸 당기기 위해 100만을 곱해줌
// undefined
//맞나..?
// undefined
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '062580'
String(Math.floor(Math.random() * 1000000))
// '390844'
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0") //여섯자리 인증번호 만드는 코드
// undefined
token
// '687666'
token
// '687666'
token
// '687666'
token
// '687666'
token
// '687666'
token
// '687666'



//getToken


Math.random()
// 0.21285897119358577
Math.random() * 1000000
// 128509.74140480997
String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
// '432816'
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
token
// '936973'
function aaa() {
    alert("안녕하세요!!!!")
}
// undefined
aaa()
// undefined
function getToken() {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
getToken()
// VM2020:3 837277
// undefined
getToken()
// VM2020:3 350578
// undefined
getToken()
// VM2020:3 787431
// undefined
getToken()
// VM2020:3 383665
// undefined
getToken()
// VM2020:3 504285
// undefined
getToken()
// VM2020:3 928666
// undefined
//어떤 특정한 기능을 만들고 싶을때 함수를 사용한다.
// undefined