# 23.08.23 수업시간 풀이
from collections import deque


def solution(queue1, queue2):

    answer = 0

    deq1 = deque(queue1)
    deq2 = deque(queue2)

    # sum() 메서드 이용해서 요소의 값을 더할 수 있습니다!
    sum1 = sum(queue1)
    sum2 = sum(queue2)

    # 먼저 두 배열의 총 합을 더해서 반으로 나눴을 때 홀수가 되면
    # 답을 구할 수 없으므로 예외처리
    if (sum1 + sum2) % 2 != 0:
        answer = -1

        # 큐의 길이의 4배 이상 while문 내에서 동작하면 그건 안 되는 작업이라고 가정할 것
    max_iterations = 4 * len(queue1)

    # 큐1의 합과 큐2의 합이 같아질 때까지 계속 돌아감!
    while sum1 != sum2:
        # 큐의 길이의 4배 이상 while문 내에서 동작하면
        if answer == max_iterations:
            return -1

            # sum1 합이 sum2보다 크면
        if sum1 > sum2:
            # deq1에서 요소를 꺼내서
            one = deq1.popleft()
            # deq2에 넣음
            deq2.append(one)
            # 넣은 쪽을 더해줘야죠?
            sum2 += one
            # 반대쪽은 빼줘야 합니다
            sum1 -= one
            # sum1 합이 sum2보다 작으면
        elif sum1 < sum2:
            # deq2에서 요소를 꺼내서
            two = deq2.popleft()
            # deq1에 넣음
            deq1.append(two)
            # 넣은 쪽을 더해줘야죠?
            sum1 += two
            # 반대쪽은 빼줘야 합니다
            sum2 -= two
            # sum1과 sum2이 같아지면
        else:
            # 그동안 누적했던 answer 체크하고 break
            answer
            break

            # if-else문 열심히 도는 동안 answer는 계속 누적됩니다
        answer += 1

    return answer
