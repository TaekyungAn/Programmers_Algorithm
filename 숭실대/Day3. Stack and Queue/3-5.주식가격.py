# 23.08.23 수업시간 풀이1
from collections import deque


def solution(prices):

    # prices 길이만큼 answer 길이 만듦
    answer = [0] * len(prices)

    # prices의 길이만큼 순회
    for i in range(len(prices)):
        # prices 다음 요소랑 계속 비교
        for j in range(i+1, len(prices)):
            # 이전 가격이 이후 가격보다 낮으면
            if prices[i] <= prices[j]:
                # 1초 증가
                answer[i] += 1
            else:
                # 높아도 일단 1초는 버텼다고 생각해서 올리고
                answer[i] += 1
                # 멈춤
                break
    return answer

# 23.08.23 수업시간 풀이2 (큐)


def solution(prices):
    answer = []
    # prices 배열을 deque로 변환하여 사용. 효율성 문제 땜에 ㅠ
    # 데크는 특히 push/pop 연산이 빈번한 알고리즘에서 리스트보다 월등한 속도를 자랑
    deq = deque(prices)

    while deq:
        # deq.popleft()를 통해 맨 앞의 주식 가격을 하나씩 꺼내옴
        # 이 가격은 현재 가격으로 설정
        current = deq.popleft()

        # 각 주식 가격마다 count를 초기화
        count = 0

        # for문으로 순차적으로 순회
        for price in deq:
            # 그래서 꺼낸 가격이 순회한 가격 이하면
            if current <= price:
                # count 올림
                count += 1
            else:
                # 만약에 순회 가격 초과하면!
                # 어쨌든 주식 가격이 떨어져도 1초는 올라야 함
                count += 1
                break  # 주식 가격이 떨어지는 순간이므로 반복 종료

                # 구해진 count 값을 answer 배열에 추가
        answer.append(count)

    return answer

# 23.08.23 수업시간 풀이3 (스택)


def solution(prices):
    answer = [0] * len(prices)
    stack = []  # 스택으로 사용할 리스트

    for i in range(len(prices)):
        # 스택이 비어있지 않고, 현재 가격이 스택의 가장 위에 있는 가격보다 작을 경우
        while stack and prices[i] < prices[stack[-1]]:
            # 스택에서 값을 꺼내서
            j = stack.pop()
            # 떨어지지 않은 기간을 계산하여 저장
            answer[j] = i - j
        # 현재 인덱스를 스택에 추가
        stack.append(i)

    # 스택에 남아있는 인덱스들은 끝까지 떨어지지 않은 것으로 처리
    while stack:
        j = stack.pop()
        answer[j] = len(prices) - 1 - j

    return answer
