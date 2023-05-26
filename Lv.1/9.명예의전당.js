// 다른사람풀이1: 3개 최솟값이랑 비교 후 넣음. 정렬
// 처음 stage에 넣은 3개의 값 정렬이 어떻게 된건지 모르겠음..
function solution(k, score) {
  const answer = [];
  const stage = [];
  // 모든 점수 순회
  for (let i = 0; i < score.length; i++) {
    // 명예의 전당 기본 셋팅
    if (i < k) {
      stage.push(score[i]);
    }
    // 이번 점수가 명예의 전당 최하위 점수보다 큰 경우
    if (score[i] > Math.min(...stage)) {
      // 가장 작은 수를 이번 점수와 교체 후 내림차 순 정렬
      stage.pop();
      stage.push(score[i]);
      stage.sort((a, b) => b - a);
    }
    // 결과값에 명예의 전당 중 최하위 점수 입력
    answer.push(stage.at(-1));
    console.log("stage", stage);
    console.log("answer", answer);
  }
  return answer;
}
let k = 3;
let score = [10, 100, 20, 150, 1, 100, 200];
console.log(solution(k, score));
// result=[10, 10, 10, 20, 20, 100, 100]

// 비슷한 풀이 : 4개 정렬 후 젤 작은거 버림
// reduce, push, sort, shift
function solution(k, score) {
  const stack = [];
  // a는 최종값 반환, c는 score한바퀴돌면서 요소 하나씩(현재값)
  return score.reduce((a, c) => {
    console.log(a, c);
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }

    a.push(stack[0]);
    return a;
  }, []);
}
