// 내가 풀다 못푼 것
function solution(keymap, targets) {
  var answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let x of targets) {
    // "ABACD"
    for (let y of x) {
      // 'A'
      console.log("Now", y);
      min = Number.MAX_SAFE_INTEGER;
      for (z of keymap) {
        // 'A' 들어있는 "ABACD", "BCEFD"
        console.log(z.indexOf(y));
        let n = z.indexOf(y);
        if (n !== -1) {
          min = Math.min(n, min);
        }
      }
      console.log("min", min);
      //   console.log("정답", sum);
    }
    sum += min;
    answer.push(sum);
  }
  return answer;
}
let keymap = ["ABACD", "BCEFD"];
let targets = ["ABCD", "AABB"];
console.log(solution(keymap, targets));
// result=[9, 4]
/**
 * targets의 첫번째 타겟 "ABCD"
 * keymap에서 각 key안에 다음이 몇번째 index에 있는지 본다.
 * 1. A => "ABACD" 0번째, "BCEFD"
 * 2. B => "ABACD" 1번째, "BCEFD" 0번째
 * 3. C => "ABACD" 3번째, "BCEFD" 1번째
 * 4. D => "ABACD" 4번째, "BCEFD" 4번째
 * 최소숫자+1 들을 더한다. 1+1+2+5=9
 */

// 다른사람풀이1
function solution(keymap, targets) {
  let answer = [];
  let obj = {};
  console.log(targets);
  // 타겟에 있는 요소들을 객체(요소:인덱스값)로 만드는 과정
  const targetSet = [...new Set(targets.join(""))]; // 중복제거 ['A', 'B', 'C', 'D']
  targetSet.map((v) => {
    keymap.map((value) => {
      if (!value.includes(v)) return;
      const index = value.indexOf(v);
      if (!obj.hasOwnProperty(v)) return (obj[v] = index);
      if (obj.hasOwnProperty(v))
        // 대소비교
        return (obj[v] = obj[v] > index ? index : obj[v]);
    });
  });

  console.log(obj);
  // 타겟을 돌면서 만들어놓은 객체를 기반으로 값 구함
  targets.map((v, i) => {
    // map으로 1:1매칭 [a,b]=>[ㄱ,ㄴ] (answer에 push같은거 안해도 됨)
    console.log(v);
    for (let a = 0; a < v.length; a++) {
      // 원하는 값 없으면 -1출력
      if (!obj.hasOwnProperty(v[a])) return (answer[i] = -1);
      // 원하는 값 있으면 0으로 초기화
      if (obj.hasOwnProperty(v[a]) && !answer[i]) answer[i] = 0;
      answer[i] += obj[v[a]] + 1;
    }
  });
  return answer;
}

// 다른사람풀이2
function solution(keymap, targets) {
  const answer = [];
  const map = {};

  for (const items of keymap) {
    items
      .split("") //문자열 쪼개서 배열로 만듦
      // 객체 map 안에 key:value 넣음 (value는 최솟값)
      .map((item, index) => {
        console.log(item, index);
        map[item] = map[item] < index + 1 ? map[item] : index + 1;
        console.log("map[item]", map[item]);
        console.log(map);
      });
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
/*
// 다른사람풀이3
function solution(keymap, targets) {
    const answer = [];
  
    for (let i of targets) {
      let sum = 0;
      for (let j of i) {
        let idxArr = keymap.map((v) => v.split("").indexOf(j) + 1 || Infinity);
        sum += Math.min(...idxArr);
      }
      sum = sum === Infinity ? -1 : sum;
      answer.push(sum);
    }
    return answer.includes(Infinity) ? -1 : answer;
  }*/
