// 내가푼정답
function solution(food) {
  var answer = "";
  let n = food.length;
  let sH = new Map();
  for (let i = 0; i < n; i++) {
    sH.set(i, food[i]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(sH.get(i) / 2); j++) answer += i;
  }
  answer += 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < Math.floor(sH.get(i) / 2); j++) answer += i;
  }
  return answer;
}
let food = [1, 3, 4, 6];
let result = "1223330333221";
console.log(solution(food));

// 다른사람풀이1 : repeat, reverse
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}

// 다른사람풀이2 :
function solution(food) {
  let player1 = [];
  let player2 = [];
  let repeat = 0;
  for (let i = 1; i <= food.length; i++) {
    if (food[i] > 1) {
      repeat = Math.floor(food[i] / 2);
      for (let j = 0; j < repeat; j++) player1.push(i);
      for (let k = 0; k < repeat; k++) player2.unshift(i);
    }
  }
  player1.push(0);
  player1 = player1.concat(player2);
  return player1.join("");
}

// 다른사람풀이3 : repeat없이
function solution(food) {
  var answer = "";
  let arr = [];

  food.map((f, i) => {
    f = f % 2 == 0 ? f : f - 1;
    for (let j = 0; j < f / 2; j++) {
      arr.push(i);
    }
  });

  answer = arr.join("") + 0 + arr.reverse().join("");

  return answer;
}
