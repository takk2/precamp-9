const classmates = ["철수", "영희", "훈이"]
// undefined
classmates // console. log 에다가 해야되지만 개발자 도구에서는 안써도 지원을 해줌
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.push("맹구") // 맨 마지막에 상자를 추가
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.includes('맹구')
// true
classmates.pop() //맨 마지막 상자를 지운다
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length // 상자의 총 길이를 구한다
// 3
const aaa = [1,2,3]
// undefined
aaa = [4,5,6]