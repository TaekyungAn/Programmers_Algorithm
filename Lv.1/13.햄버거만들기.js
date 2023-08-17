// 다른사람 풀이 참고한 내 풀이
function solution(ingredient) {
  var answer = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      ingredient.splice(i, 4);
      i -= 4;
      answer++;
    }
  }
  return answer;
}
let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient));
// result=2

// 다른사람 풀이 넣어야 하는데 지금 귀찮아서 안함
