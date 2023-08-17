// 23.08.17 내풀이 O
function solution(n) {
  return (n + "")
    .split("")
    .map((i) => parseInt(i))
    .reverse();
}

const n = 12345;

console.log(solution(n));

// 23.08.17 다른사람풀이
// 숫자풀이
function solution(n) {
  var arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}
