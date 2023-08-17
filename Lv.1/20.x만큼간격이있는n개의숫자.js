// 23.08.17 내풀이 O
function solution(x, n) {
  let answer = [];
  let add = x;
  for (let i = 0; i < n; i++) {
    answer.push(add);
    add += x;
  }
  return answer;
}

const x = 2;
const n = 5;

console.log(solution(x, n));

// 23.08.17 다른사람풀이 (기본)
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
// 23.08.17 다른사람풀이 (기발)
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
