# 23.08.22 수업시간 풀이
def solution(n, s):
    """
    자연수의 정의 -> 1보다 큰 정수
    집합 -> 중복이 안됨. 그러나 중복 집합 같은 수가 올 수 있습니다.

    - 집합을 구하는 경우
    5중에 2개 뽑으면(중복 순열)
    15, 14, 13, 12, 11
    25, 24, 23, 21, 22
    35, 34, 32, 31, 33
    45, 43, 42, 41, 44
    51, 52, 53, 54, 55

    이 중, 앞뒤가 중복된 숫자를 제거(중복 조합)
    11, 12, 13, 14, 15
    22, 23, 24, 25
    33, 34, 35
    44, 45
    55

    결국 중복 조합, 6C2 -> 6! / 2!*(6-2)! -> 6*5*4*3*2*1 / (2*1)*(4*3*2*1)
    최악의 경우, n은 10000개 s는 1억
    1억C1만 -> 계산할 수 없을만큼 큰 수입니다.

    결국 다른방법을 찾아야 합니다. 2, 9가 입력된 경우라면 가능한 조합은 아래와 같습니다.
    18, 27, 36, 45

    2, 8이 입력된 경우라면 가능한 조합은 아래와 같습니다.
    17, 26, 35, 44

    3, 10이 입력된 경우라면 가능한 조합은 아래와 같습니다.
    118 127 136 145
    226 235 244
    334

    일정한 방정식을 찾을 수 있습니다. 선택되는 숫자는 가장 마지막 숫자가 곱셉이 제일 큰 것을 확인할 수 있습니다.
        1. s / n의 값이 항상 반복됩니다.(내림) -> s // n입니다.
        2. s % n 즉, 나눠서 나머지가 남는다면 남는 나머지 만큼의 숫자가 1씩 증가해야 합니다.
            ex) 11 / 4라면, 2와 나머지는 3입니다.
                즉, 2222에서 3개의 숫자를 1 증가해야 합니다.
                2222 -> 2223 -> 2233 -> 2333
                결과는 2333입니다.
    결국 나누어서 나오는 몫을 n만큼 반복하여 선택하고 나머지 만큼 선택된 숫자를 1씩 증가하면 결과를 찾을 수 있습니다.
    """
    # 자연수 n개의 합으로 n보다 작은 s를 만들 수는 없으므로 [-1]을 리턴한다
    if n > s:
        return [-1]
    result = []
    # s를 n으로 나눈 몫이 n개이도록 초기값을 정한다.
    divided = s // n
    for _ in range(n):
        result.append(divided)
    idx = len(result) - 1
    # s를 n으로 나눈 몫에서 나머지만큼 각 값에 1씩 더해준다.
    for _ in range(s % n):
        result[idx] += 1
        idx -= 1
    return result
