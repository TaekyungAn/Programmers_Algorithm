# 23.08.23 수업시간 풀이1
def solution(s):
    answer = True

    # '('을 담을 스택
    my_stack = []

    # s 순회: string은 리스트처럼 요소 순회가 가능합니다
    # : 다른 프로그래밍 언어도 마찬가지!
    for i in s:
        # 스택에 '('을 담을 거
        if i == '(':
            my_stack.append(i)

        # s에 ')'인 경우
        else:
            # 스택이 비었어? 그럼 그냥 다 ')'라는 거라 짝 안 맞음
            # not? 논리 연산자 bool 값을 반대로 만들어줌
            # 특히 문자열, 리스트, 튜플, 딕셔너리 등의 값이 비어 있으면 거짓
            # 뭐가 들어있으면 참으로 봄
            if not my_stack:
                return False
            else:
                my_stack.pop()

    # for문 다 순회했어. 근데 뭐가 들어 있어.
    # 뭐가 들어있다는 건 결국 짝이 안 맞는다는 거임
    print(my_stack)
    print(bool(my_stack))

    if my_stack:
        answer = False

    return answer

# 23.08.23 수업시간 풀이2


def solution(s):
    answer = True
    hashmap = {"(": ")"}

    my_list = list(s)
    my_stack = []

    for i in my_list:
        if i == '(':
            my_stack.append(i)
        else:
            if len(my_stack) == 0 or hashmap[my_stack.pop()] != i:
                answer = False
    if len(my_stack) != 0:
        answer = False

    return answer
