// 와.... 쉬운문제인데 엄~~~청 삽질했다...
// 알게된 점 :for문에서 i<goal.length로 해놓고 goal.shift()로 삭제시키면
// i가 도는 횟수가 계속 줄어드는 거다.
// 선언으로 let len=goal.length로 해놓고 i<len 으로 해놔야 계속 같은 숫자임.

function solution(cards1, cards2, goal) {
  const len = goal.length;
  console.log(len);
  for (let i = 0; i < len; i++) {
    if (cards1[0] === goal[0]) {
      cards1.shift();
      goal.shift();
    } else if (cards2[0] === goal[0]) {
      cards2.shift();
      goal.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
let cards1 = ["i", "water", "drink"];
let cards2 = ["want", "to"];
let goal = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1, cards2, goal));

// 훨씬 간단한 방법 : 없으면 그냥 멈추면 됨
function solution(cards1, cards2, goal) {
  for (const x of goal) {
    if (cards1[0] == x) {
      cards1.shift();
    } else if (cards2[0] == x) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
