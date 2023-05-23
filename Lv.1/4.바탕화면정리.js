// 23.05.24 내가 푼 정답
function solution(wallpaper) {
  let lux = 50,
    luy = 50,
    rdx = 0,
    rdy = 0;
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
