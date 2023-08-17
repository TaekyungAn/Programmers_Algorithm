// 23.08.17 내풀이 O
function solution(num) {
  let answer = 0;
  const Obj = String(num).split("");
  for (let x of Obj) {
    answer += Number(x);
  }
  return answer;
}

const num = 978;
console.log(solution(num));

// 23.08.17 다른사람풀이
// reduce()
// 문자열 변환 : n+""
// 추가 설명 : 자바스크립트에서 덧셈 연산자 +를 사용할 때, 피연산자 중 어느 하나가 문자열이면 문자열이 아닌 다른 피연산자도 문자열로 타입이 변환되어 문자열을 합친 값이 반환됩니다. 위의 예시에서 n+""은 숫자 + 문자열의 형태이기 때문에 결과적으로 문자열 n을 반환합니다. 참고로 ""은 빈문자열이기 때문에 연결해도 반환값에 영향을 주지 않습니다. 그저 다른 피연산자를 문자열로 형변환하는 역할을 합니다. 따라서 String(n)과 동일하게 사용할 수 있습니다.
function solution(num) {
  return (num + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
