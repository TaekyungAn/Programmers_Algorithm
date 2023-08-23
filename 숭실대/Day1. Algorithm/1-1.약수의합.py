# 23.08.21 수업시간 풀이
def solution(n):
    # 입력: 정수 n
    # 출력: 약수의 합
    sum = 0
    for num in range(1, n + 1):
        if (n % num == 0):
            sum = sum + num
    return sum
