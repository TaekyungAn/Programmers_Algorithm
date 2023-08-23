# 23.08.23 수업시간 풀이
def solution(arr):

    # 스택으로 사용
    answer = []

    # 주어진 원본 배열의 앞 요소부터 하나씩 빼? 순회를 해야겠구나! 인덱스로 접근해야 함
    for idx in range(len(arr)):
        # 지금 인덱스가 0이면?
        if idx == 0:
            answer.append(arr[idx])
        else:
            # 현재 인덱스랑 이전 인덱스가 같지 않으면?
            if arr[idx] != arr[idx-1]:
                answer.append(arr[idx])

    return answer
