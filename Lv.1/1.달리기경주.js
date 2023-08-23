// 내가 푼 정답 : 시간초과 (이중for문)
function solution(players, callings) {
  let answer;
  for (let i = 0; i < callings.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (callings[i] === players[j]) {
        let tmp = players[j];
        players[j] = players[j - 1];
        players[j - 1] = tmp;
      }
    }
  }
  answer = players;
  return answer;
}

// 조건
let players = ["mumu", "soe", "poe", "kai", "mine"];
let callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings)); //["mumu", "kai", "mine", "soe", "poe"]

// 정답1 : 다른사람 풀이 (객체, forEach)
function solution(players, callings) {
  let idx;
  let name1;
  let name2;
  const idxList = {};

  // forEach로 배열 객체화 시키기
  players.forEach((name, index) => (idxList[name] = index));
  //{"mumu":0, "soe":1, "poe":2, "kai":3, "mine":4}
  //{kai: 1, mine: 2, mumu: 0, poe: 4, soe: 3}

  for (let call of callings) {
    // call = kai
    idx = idxList[call]; // 1
    name1 = players[idx]; // kai
    name2 = players[idx - 1]; // mumu
    // 객체 숫자 바꿔줌
    idxList[call] -= 1; // kai: 1-1=0
    idxList[name2] += 1; // mumu: 0+1=1
    // 배열 순서 바꿔줌
    players[idx] = name2; // player[1] = mumu
    players[idx - 1] = name1; // player[0] =kai
  }

  return players;
}

// 정답2 : 위와 비슷한 풀이 (객체, for문)
function solution(players, callings) {
  const playerMap = {};

  // calling 원소들의 idx를 미리 구해서 저장
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const idx = playerMap[callings[i]];
    const temp = players[idx - 1];

    // 해당 idx와 이전 idx의 원소를 swap
    players[idx - 1] = callings[i];
    players[idx] = temp;

    // map의 idx도 갱신
    playerMap[callings[i]] = idx - 1;
    playerMap[temp] = idx;
  }

  return players;
}
