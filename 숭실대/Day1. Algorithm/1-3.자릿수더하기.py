# 23.08.21 수업시간 풀이
def solution(n):
    answer = 0
    num = int(n)
    while n > 0:
        answer += n % 10
        n = n // 10

    return answer
