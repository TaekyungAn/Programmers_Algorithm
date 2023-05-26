// 내가 푼 답 : 이번엔 다른사람들보다 잘 푼듯
function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  //   for (let i = 1; i <= score.length; i++) {
  //     if (m * i - 1 < score.length) {
  //       answer += score[m * i - 1] * m;
  //     }
  //   }
  let i = 1;
  while (m * i - 1 < score.length) {
    answer += score[m * i - 1] * m;
    i++;
  }
  return answer;
}
let k = 4;
let m = 3;
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
console.log(solution(k, m, score));
// result=8
