# 23.08.22 수업시간 풀이
def solution(survey, choices):
    """
    1K + 1K
    2K
    결국 어떤식으로 구현해도 복잡도는 문제가 없습니다.

    성격 유형을 저장할 딕셔너리 생성
    선택지에 따른 점수를 미리 구현(룩업 테이블 - 딕셔너리, 배열, abs()어떤것이든 활용하셔도 괜찮습니다.)
    두 리스트 중 어떤것이든 순회를 시작
    각각의 캐릭터(8개형)에 점수를 저장하고,
    순회가 끝나면 저장한 데이터(항상 8개)를 다시 순회하면서
    높은 점수를 선택해서 문자열로 저장후 반환합니다.
    """

    # 선택지에 따른 점수를 미리 룩업테이블로 구현
    score_map = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3
    }

    # 성격 유형을 저장할 딕셔너리
    scores = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0
    }

    # survey를 순회합니다.
    for i, q in enumerate(survey):
        # 현재 추가할 점수를 score_map에서 가져옵니다.
        score = score_map.get(choices[i])
        # 3보다 작거나 같다면(비동의 즉 좌측의 성격 유형에 저장해야 한다면)
        if choices[i] <= 3:
            scores[q[0]] += score
        # 이 외의 경우는 우측에 저장합니다.(0은 룩업 테이블에서 애초에 0이기 떄문에 상관 없습니다.)
        else:
            scores[q[1]] += score

    # 결과를 반환할 문자열 변수 선언
    result = ""
    # 매칭된 4가지 유형의 점수를 조건문에 따라 좌측, 우측을 선택, >=로 설정하여 두 점수가 같을 경우 좌측을 선택합니다.
    # 중요한것은, 좌측에 항상 사전순으로 빠른 문자열을 작성해야 합니다.
    result += 'R' if scores['R'] >= scores['T'] else 'T'
    result += 'C' if scores['C'] >= scores['F'] else 'F'
    result += 'J' if scores['J'] >= scores['M'] else 'M'
    result += 'A' if scores['A'] >= scores['N'] else 'N'

    return result
