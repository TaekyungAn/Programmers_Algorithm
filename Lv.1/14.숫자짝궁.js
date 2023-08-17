// 23.06.14
// 내가 푼 시간초과, 용량초과 풀이
function solution(X, Y) {
  var answer = [];
  let arr = Y.split("");

  for (let num of X) {
    for (let i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        answer.push(arr[i]);
        arr.splice(i, 1);
        break;
      }
    }
  }
  if (answer.length === 0) return "-1";
  return String(Number(answer.sort((a, b) => b - a).join("")));
}

// let X = "100";
// let Y = "203045";
let X = "12321";
let Y = "42531";
console.log(solution(X, Y));

// 다른사람풀이1
function solution(X, Y) {
  let countX = new Array(10).fill(0);
  const xArr = X.split("");

  xArr.forEach((item) => {
    countX[item]++;
  });

  let countY = new Array(10).fill(0);
  const yArr = Y.split("");
  yArr.forEach((item) => {
    countY[item]++;
  });

  let ans = [];
  countX.forEach((item, index) => {
    if (item !== 0 && countY[index] !== 0) {
      const min = Math.min(item, countY[index]);
      ans.push(String(index).repeat(min));
    }
  });

  if (ans.length === 0) {
    return "-1";
  }
  if (Number(ans.join("")) === 0) {
    return "0";
  }
  return ans.reverse().join("");
}

// 다른사람풀이2
function solution(x, y) {
  let answer = "";
  const xHash = new Map();
  const yHash = new Map();

  x.split("").forEach((i) => xHash.set(i, xHash.has(i) ? xHash.get(i) + 1 : 1));
  y.split("").forEach((i) => yHash.set(i, yHash.has(i) ? yHash.get(i) + 1 : 1));

  for (let i = 9; i >= 0; i--) {
    const index = i.toString();
    if (!xHash.has(index)) continue;
    if (!yHash.has(index)) continue;

    const num = Math.min(xHash.get(index), yHash.get(index));
    answer += index.repeat(num);
  }
  if (answer.length === 0) return "-1";
  if (answer[0] === "0") return "0";
  return answer;
}

// 다른사람풀이3
function solution(X, Y) {
  let result = "";
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === "") return "-1";
  if (+result === 0) return "0";
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");
}

// want
// X, Y에서 짝으로 숫자가 존재하는 경우, 해당 문자열을 통해 만들 수 있는 최대값을 반환하라

// solving
// 1. X를 순회하며 각 숫자의 개수 세어 객체 or 배열에 저장
// 2. Y를 순회하며 각 문자가 1번에서 저장한 객체에 저장한 값이 1이상인 경우, 그 값을 -1하고 result에 추가
// 3. 2번에서 만들어진 문자열이 빈 문자열이라면 -1 반환
// 5. 2번에서 만들어진 문자열을 숫자로 변환했을 때 0이라면 0 반환
// 6. 해당 문자열을 내림차순 정렬한 문자열 반환

// 다른사람풀이4
function solution(X, Y) {
  const commonNumbers = [...new Set(X.split(""))]
    .filter((number) => {
      return Y.includes(number);
    })
    .sort((a, b) => b - a);

  if (!commonNumbers.length) return "-1";

  if (!Number(commonNumbers[0])) return "0";

  return commonNumbers
    .map((number) => {
      const Xcount = X.split("").reduce((count, Xnumber) => {
        if (Xnumber === number) return (count += 1);

        return count;
      }, 0);

      const Ycount = Y.split("").reduce((count, Ynumber) => {
        if (Ynumber === number) return (count += 1);

        return count;
      }, 0);

      return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount);
    })
    .join("");
}
