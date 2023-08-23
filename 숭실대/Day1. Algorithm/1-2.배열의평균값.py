# 23.08.21 수업시간 풀이
def solution(numbers):
    # 1. numbers의 모든 요소를 더한다. -> sum
    # 2. sum을 numbers의 길이로 나눈다.
    sum = 0
    for num in numbers:
        sum = sum + num

    avg = sum / len(numbers)
    return avg
