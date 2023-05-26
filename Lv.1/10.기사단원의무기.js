// 내가 푼 시간초과 답
function solution(number, limit, power) {
  let divisor = [];
  let count = 0;
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    divisor.push(i);
  }
  divisor
    .map((num) => {
      let index = 1;
      count = 0;
      while (index <= num / 2) {
        if (num % index === 0) count++;
        index++;
      }
      return (num = count + 1);
    })
    .map((item) => {
      if (item <= limit) return (answer += item);
      else return (answer += power);
    });

  return answer;
}
// 조건
let number = 5;
let limit = 3;
let power = 2;
console.log(solution(number, limit, power));
//result = 10;

// 다른사람풀이1
function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

// 다른사람풀이2 : 참 어렵게도 풀었다(?)
function solution(number, limit, power) {
  let resultArr = [];
  let res;
  for (let i = 1; i <= number; i++) {
    let temp = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) temp.push(j);
    }
    res = temp.length;
    for (let k = 0; k < res; k++) {
      temp.push(i / temp[k]);
    }
    console.log(temp, new Set(temp).size);
    resultArr.push(new Set(temp).size);
  }

  res = 0;
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] > limit) res += power;
    else res += resultArr[i];
  }
  return res;
}
