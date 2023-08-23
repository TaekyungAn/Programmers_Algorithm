// 23.08.23 X => 효율성 하나 통과 못함

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    if (answer[answer.length - 1] !== x) answer.push(x);
  }
  return answer;
}
