# 23.08.23 수업시간 풀이
from collections import deque


def solution(priorities, location):
    # 결과 배열 초기화
    result = []
    # deque 모듈로 queue 생성
    queue = deque()
    # basic
    for idx in range(len(priorities)):
        queue.append((priorities[idx], idx))

        # enumerate 사용 : 인덱스(index)와 원소를 동시에 접근하면서 for문을 돌 수 있음
    for idx, priority in enumerate(priorities):
        queue.append((priority, idx))

        # 이렇게 리스트 컴프리헨션으로 줄일 수도 있는데 사실 저는 이거 안 좋아합니당...
    # queue = deque([(p, idx) for idx, p in enumerate(priorities)])

    while queue:
        # 큐의 맨 앞 요소를 꺼냄
        current = queue.popleft()

        # 큐 내에서 더 큰 우선순위가 있는지 확인
        # any() 함수는 list의 원소를 필터링하거나 조건 검사할 때 사용하는 함수
        # queue안의 모든 튜플들을 순회하면서
        # 순회중인 튜플의 우선순위가 현재 프로세스에서 pop한 current 튜플의 우선순위보다 큰지 확인
        # 조건 만족 : 순회중인 튜플 중 우선순위가 더 큰 게 있다면
        if any(current[0] < idx[0] for idx in queue):

            # 큐의 뒤로 다시 추가
            queue.append(current)

            # 조건 불만족 : 순회중인 튜플 중 우선순위가 더 큰 게 없다면
        else:
            # 결과 배열에 추가
            result.append(current)

            # 그리고 타겟 프로세스 위치인지 검사하고 타겟 프로세스 위치라면
            if current[1] == location:
                # 실행된 프로세스 수 반환
                # 여태까지 result에 실행된 프로세스를 담아왔음
                # 인덱스 비교했는데 같으면 여태까지 담은 프로세스 길이 반환하면 됨
                return len(result)

                # while문 밖으로 나와서 하는 방법
                # 나올 땐 while문 안의 if-else문 내의 else 안 if문을 제거해야 합니다.
        for idx, priority in enumerate(result):
            if priority[1] == location:
                return idx + 1
