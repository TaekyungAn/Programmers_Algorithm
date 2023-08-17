function solution(s) {
  let back = []; // back 스택을 담을 배열
  let forward = []; // forward 스택을 담을 배열
  let cur = ""; // 현재 페이지를 담을 문자열
  let arr = s.split(" ");
  let sH = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  for (let action of arr) {
    // 앞으로 갈 경우
    if (action === "F" && forward.length === 0) continue;
    if (action === "F" && forward.length !== 0) {
      back.push(cur);
      cur = forward.pop();
    }
    // 뒤로 갈 경우
    else if (action === "B" && back.length === 0) continue;
    else if (action === "B" && back.length !== 0) {
      forward.push(cur);
      cur = back.pop();
    }
    // 현재 페이지
    else {
      if (cur) {
        back.push(cur);
      }
      cur = action;
      forward = [];
    }
    console.log(back, cur, forward);
    if (sH.has(cur)) {
      sH.set(cur, sH.get(cur) + 1);
    } else sH.set(cur, 1);
  }
  console.log(sH);

  for (let [key, value] of sH) {
    max = Math.max(max, value);
    console.log(max);
  }

  return max;
}

// let s = "1 2 3 4 B B 42 B F F F F";
// let s = "1 10 B B 20 1 F B B";
let s = "2 10 B B B B B F F F 3 2 F B B";
console.log(solution(s));
