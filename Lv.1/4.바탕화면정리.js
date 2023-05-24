// 23.05.24 내가 푼 정답 : 이중for문
function solution(wallpaper) {
  let [lux, luy, rdx, rdy] = [50, 50, 0, 0];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        lux = Math.min(lux, i);
        luy = Math.min(luy, j);
        rdx = Math.max(rdx, i);
        rdy = Math.max(rdy, j);
      }
    }
  }
  return [lux, luy, rdx + 1, rdy + 1];
}

let wallpaper = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];
console.log(solution(wallpaper));

// 다른사람 풀이1: forEach)
function solution(wallpaper) {
  let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
  // x1 => min i
  // x2 => max i
  // y1 => min idx
  // y2 => max idx
  wallpaper.forEach((paper, i) => {
    if (paper.includes("#")) {
      x1 = Math.min(x1, i);
      y1 = Math.min(y1, paper.indexOf("#"));
      x2 = Math.max(x2, i);
      y2 = Math.max(y2, paper.lastIndexOf("#"));
    }
  });
  return [x1, y1, x2 + 1, y2 + 1];
}

// 다른사람풀이2: 배열, forEach
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
