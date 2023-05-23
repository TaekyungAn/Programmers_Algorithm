// 내가 푼 정답 (객체, 이중for문)
function solution(name, yearning, photo) {
  let answer = [];
  let peopleMap = {};
  for (let i = 0; i < name.length; i++) {
    peopleMap[name[i]] = yearning[i];
  }
  for (let x of photo) {
    let sum = 0;
    for (let y of x) {
      if (peopleMap[y]) {
        sum += peopleMap[y];
      }
    }
    answer.push(sum);
    sum = 0;
  }
  return answer;
}

// 조건
let name = ["may", "kein", "kain", "radi"];
let yearning = [5, 10, 1, 3];
let photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];
console.log(solution(name, yearning, photo)); //[19, 15, 6]

// 정답 (Map객체, forEach, map, reduce)
function solution(name, yearning, photo) {
  const score = new Map();
  // 객체로 만들기
  name.forEach((n, idx) => {
    score.set(n, yearning[idx]);
    console.log(n, idx);
  });
  console.log(score);
  // 이중 배열 풀면서 점수 더하기
  return photo.map((names) =>
    names.reduce((a, n) => a + (score.get(n) || 0), 0)
  );
}
