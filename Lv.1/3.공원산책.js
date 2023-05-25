function solution(park, routes) {
  const N = park.length;
  const M = park[0].length;

  // 시작 좌표 설정
  let start;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (park[i][j] == "S") start = [i, j];
    }
  }
  // 방향 객체
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
  // 주어진 이동정보 배열에 담기
  for (const route of routes) {
    const [dir, distanceStr] = route.split(" ");
    let distance = parseInt(distanceStr);
    let [nx, ny] = start;
    // 주어진 걸음수 만큼 한칸씩 이동
    let step = 0;
    while (step < distance) {
      nx += directions[dir][0];
      ny += directions[dir][1];
      // 만약 밖에 나가게 되거나 X를 만나게 된다면 종료
      if (nx < 0 || N <= nx || ny < 0 || M <= ny || park[nx][ny] === "X") break;
      step++;
    }
    // 원하는 걸음수를 채우면 start는 마지막 위치로 바꿈
    if (step === distance) start = [nx, ny];
  }

  return start;
}

// 다른사람풀이2
function solution(park, routes) {
  const dirs = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(" ");
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}

let park = ["SOO", "OXX", "OOO"];
let routes = ["E 2", "S 2", "W 1"];
console.log(solution(park, routes));
