# 23.08.21 수업시간 풀이
def solution(a, b):
    # 모두 홀수
    if (a % 2 == 1 and b % 2 == 1):
        return (a * a) + (b * b)
    # 모두 짝수
    if (a % 2 == 0 and b % 2 == 0):
        return abs(a - b)
    # 그 외
    return 2 * (a + b)
