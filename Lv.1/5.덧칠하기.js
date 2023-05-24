// 이상한 내 풀이 : 출력크기 초과
// 정답 자체는 나오긴 함
function solution(n, m, section) {
  let answer = 0;
  let paintZone = [];

  // 배열로 만듦
  for (let i = 0; i < n; i++) {
    paintZone.push(true);
  }
  // 배열에 칠해야 할 부분 표시
  for (let i = 0; i < section.length; i++) {
    paintZone[section[i] - 1] = false;
  }
  for (let i = 0; i < n; i++) {
    if (paintZone[i] === false) {
      for (let j = i; j < i + m; j++) {
        paintZone[j] = true;
      }
      answer++;
    }
    console.log(paintZone);
  }
  return answer;
}

// 조건
let n = 8;
let m = 4;
let section = [2, 3, 6];
console.log(solution(n, m, section));

// 다른사람풀이1: while문, includes, splice, shift
function solution(n, m, section) {
  let answer = 0;
  const target = Array.from({ length: n }, (x, i) => i + 1);
  // 1번예시를 들면 1 ~ 8까지의 배열을 만들어줍니다.
  console.log(target);
  // 배열이 빌 때 까지
  while (target.length) {
    // 배열의 앞 원소가 section에 있으면 페인트 칠을 쭉 합니다.
    // 페인트칠을 한다는 것은 없앤다는 겁니다.
    if (section.includes(target[0])) {
      target.splice(0, m);
      answer++; // 페인트 칠을 할 때 마다 +1
    } else {
      // 페인트 구역이 아니면 삭제하고 넘깁니다.
      target.shift();
    }
  }

  return answer;
}

// 다른사람풀이2: forEach
function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));
  console.log(arr);

  // Array.from() : 얕게 복사해 새로운 Array객체를 만듭니다.
  // Array.prototype.fill() : 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
  section.forEach((el) => {
    arr[el] = 1;
  });
  console.log(arr);

  section.forEach((el) => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });
  console.log(arr);
  return count;
}

// 다른사람풀이3: 창의력
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}

// 위와 같은 풀이 (설명글 있음)
// https://jjongbin.tistory.com/38
function solution(n, m, section) {
  var answer = 0;
  let end = 0;
  for (const s of section) {
    if (end < s) {
      end = s + m - 1;
      answer += 1;
    }
  }
  return answer;
}
/*
// 다른사람풀이4
function solution(n, m, section) {
  console.log(Array.from({ length: n + 1 }, () => 1));

  let answer = 0;
  // 1) 벽의 길이(n)에 맡게 배열을 만들고 0으로 초기화한다.
  const arr = Array(n).fill(0);
  // 2) 새로 칠해줘야 하는 벽의 구역을 1로 변경해 준다.
  // 벽은 1번부터지만 인덱스는 0번부터로 인덱스에 맞춰 수정해 준다.
  section.forEach((item) => (arr[item - 1] = 1));
  let i = 0;
  // 3) 벽칠하기 시작
  while (i < arr.length) {
    // 4) 하나씩 확인하며 칠해야 하는 구역(1일 경우)을 찾는다.
    if (arr[i] === 1) {
      // 5) 칠하면 answer를 증가시킨다.
      answer++;
      // 6) 한 번 칠하면 롤러의 길이(m) 만큼 칠해진다.
      i += m;
    } else i++; // 7) 칠할 필요가 없으면 다음 구역으로 넘어간다.
  }
  // 7) 페인트칠한 횟수를 반환한다.
  return answer;
}
*/
