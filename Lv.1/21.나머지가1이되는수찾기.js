// 23.08.17 내풀이 O
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
}

const n = 3;

console.log(solution(n));
