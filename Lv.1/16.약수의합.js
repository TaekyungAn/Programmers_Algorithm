// 23.08.17 내풀이 O
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}
const n = 5;
console.log(solution(n));
