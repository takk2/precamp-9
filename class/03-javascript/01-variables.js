document.write(1+1)

let child = "철수" // let을 이용해 선언을 하고 철수를 할당했다.
console.log(child)

child = "영희" // 영희를 재할당 했다. 
console.log(child) // 개발자 도구에서의 콘솔은 별도 console.log를 붙히지 않고 (변수명)만 이용하여 확인 가능하다.

const age = 13 // "13"얘는 문자이므로 계산이 안됨. // const age(선언) 13(할당)
console.log(age)
// 13 + 2 // 15
// "안녕" + "하세요" //문자 + 문자는 두 문자가 연결이 된다. ex) '안녕'+'하세요' = '안녕하세요'
// "안녕" + "13" // '안녕13'
// "안녕" + 13 // '안녕13' 어차피 계산을 못해서 뒤에 13을 문자로 생각하고 연결시켜줌

// age = 8 // const는 재할당 안됨.
// console.log(age)

const myMoney = 10000
console.log(myMoney)