// 23.08.17 내풀이 O
function solution(arr) {
  let answer = 0;
  for (let x of arr) {
    answer += x;
  }
  return answer / arr.length;
}

const arr = [1, 2, 3, 4];
console.log(solution(arr));

// 23.08.17 다른사람풀이
function average(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
