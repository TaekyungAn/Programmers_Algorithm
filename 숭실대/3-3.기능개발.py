# 23.08.23 수업시간 풀이
import math


def solution(progresses, speeds):
    # 얘는 한꺼번에 몇 개씩 배포될 건지 담을 배열
    answer = []

    # 한 번에 배포되는 개수 체크하기 위한
    count = 0

    # 개발 완료까지 남은 일수를 담을 큐
    release = []

    for i in range(len(progresses)):
        # 작업 일수 계산
        release_day = math.ceil((100 - progresses[i]) / speeds[i])
        release.append(release_day)

    current = release[0]

    # release가 들어있을 때만 돌게끔
    while release:

        # current랑 비교해서 현재 기능이 배포 가능하다면? current보다 작거나 같은 것
        if release[0] <= current:
            count += 1
            release.pop(0)  # 앞에서부터 빼야 함

        # current랑 비교해서 현재 기능이 배포 불가능? currnt보다 큰 것
        else:
            # 여태껏 카운팅한 count answer에 담음
            answer.append(count)
            count = 0
            # 앞에서부터 빼내고 있으므로 여기서 재할당을 다시 0번째 요소로 해주는 건
            # 다음 기능으로 재할당을 해주는 거임
            current = release[0]

    # while문 돌고 나옴 (큐가 다 비었다는 뜻)
    # 다 돌고 나온 count도 담아줘야 함
    answer.append(count)

    return answer
