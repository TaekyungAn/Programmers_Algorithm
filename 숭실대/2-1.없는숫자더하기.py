# 23.08.22 미리풀기O
def solution(numbers):
    full_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    for x in numbers:
        if x in full_numbers:
            full_numbers.remove(x)

    return sum(full_numbers)


numbers = [1, 2, 3, 4, 6, 7, 8, 0]
print(solution(numbers))

# 기발한 다른사람 답 1


def solution(numbers):
    return 45 - sum(numbers)


# 기발 2
def solution(x): return sum(range(10)) - sum(x)

# 기발 3


def solution(numbers):
    return sum([i for i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] if i not in numbers])

# 일반 (range, not in)


def solution(numbers):
    answer = 0
    for i in range(1, 10):
        if i not in numbers:
            answer += i
    return answer
