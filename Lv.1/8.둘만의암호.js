// 내가 만든 시간초과 코드
function solution(s, skip, index) {
  let answer;
  const asciiS = s.split("").map((item) => item.charCodeAt());
  const asciiSkip = skip.split("").map((item) => item.charCodeAt());
  console.log(asciiSkip);
  const newWord = asciiS.map((item) => {
    console.log("here", item);
    for (let i = 0; i < index; i++) {
      console.log(asciiSkip.includes(item));
      if (asciiSkip.includes(item)) {
        item = item + 2;
      } else item++;
      if (item === 123) item = 97;
      console.log(item);
    }
    return item;
  });
  answer = newWord.map((item) => String.fromCharCode(item));

  return answer.join("");
}

let s = "aukks";
let skip = "wbqd";
let index = 5;
console.log(solution(s, skip, index));
// result = "happy";
/* 참고자료
// 아스키코드 방법 .charCodeAt()
// 대문자 : 65(A)~90(Z), 소문자: 97(a)~122(z)
섹션 1-12
// 아스키코드 이용
function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122)
      answer += String.fromCharCode(num - 32); // 코드를 문자로 되돌림
    else answer += x;
  }
  return answer;
}

*/

// 내가 의도한 풀이 (다른사람풀이1:아스키코드사용)
function solution(s, skip, index) {
  let ans = "";
  let arr = s.split("");
  // a: 97 z: 122
  arr.map((item) => {
    let a = item.charCodeAt(); // 아스키코드로 나타냄
    for (let i = 0; i < index; i++) {
      a++; // 숫자 1더한 값으로 아래 사항들 수행
      // z 이상이면 a
      if (a > 122) {
        a = 97;
      }
      // 다시 문자로 변환해서 skip에 들어있는지 확인
      while (skip.includes(String.fromCodePoint(a))) {
        a++; // 있다면 한번 더 +1
        if (a > 122) {
          a = 97;
        }
      }
    }
    ans = ans + String.fromCodePoint(a);
  });
  return ans;
}

// 다른사람풀이2
function solution(s, skip, index) {
  // 1) filter 함수를 사용하여 skip문자를 제거 배열을 반환 받는다.
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((a) => !skip.includes(a));

  // 2) map 함수를 사용하여 (현재 알파벳) + index에 위치한 값을 반환한다.
  return s
    .split("")
    .map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length])
    .join("");
}
