// 23.08.17 내풀이 O
function solution(s) {
  let word = s.toLowerCase();
  let ycount = 0;
  let pcount = 0;
  for (let x of word) {
    if (x === "y") ycount++;
    if (x === "p") pcount++;
  }
  if (ycount === pcount) return true;
  else return false;
}

const s = "pPoooyY";
console.log(s.toUpperCase().split("P"));
console.log(s.toUpperCase().split("Y"));

console.log(solution(s));

// 23.08.17 다른사람풀이
// reduce사용
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}

// 가장짧은코드
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
