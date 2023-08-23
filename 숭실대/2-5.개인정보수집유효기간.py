# 23.08.22 수업시간 풀이
def solution(today, terms, privacies):
    """
    20 * 100 결국 어떤식으로 계산해도 문제 없습니다.
    이 문제에서는 날짜가 문자열로 입력되기 때문에, 각각의 날짜를 일정된 형태의 int타입으로 변환하는것이 핵심입니다.
    한달이 28일로 고정되어 있으므로, 따로 룩업 테이블을 활용하지 않아도 됩니다.
        ex) 고정되어 있지 않다면 딕셔너리를 활용해 1: 31, 2: 28, 3: 31, 4: 30 ... 과 같은 자료형을 활용

    오늘의 날짜를 일정한 형식(일)로 변경합니다.(일, 월*28, 년*12*28)
    1번 자료 - terms를 순회하며 각각의 약관을 저장합니다.(딕셔너리 활용)
        저장하며 동시에 입력된 숫자(달)을 일정한 형식(일)로 변경합니다 (*28로 연산 가능합니다)
    privacies를 순회합니다.
        privacies를 나누어, 날짜와 약관 종류로 분류
        날짜는 일정한 형식으로 수정하고, 약관 종류는 1번 자료(딕셔너리)에서 매칭된 기간정보(일)을 가져옵니다.
        날짜와 기간 정보를 합쳐서 수집 유효기간을 찾은 후(-1일 해주셔야 합니다. 문제 설명 참조) 
        오늘의 날짜보다 작다면 아직 파기하지 않아도 됩니다(정답 리스트에 추가)

    추가된 리스트를 반환합니다.
    """
    # 빈 리스트인 answer를 초기화합니다.
    answer = []

    # 입력 파라미터 "today"를 '.'로 분리하고 각 부분을 정수로 변환합니다.
    # 세 부분을 today_year, today_month, today_day 변수에 저장합니다.
    today_year, today_month, today_day = map(int, today.split('.'))

    # 주어진 날짜 "today"로부터 총 일수를 계산합니다.
    todayData = today_day + (today_month * 28) + (today_year * 12 * 28)

    # 빈 사전인 maps를 초기화합니다.
    maps = {}

    # 입력 파라미터 "terms"의 각 문자열에 대해 반복문을 실행합니다.
    for str in terms:
        # 문자열을 공백으로 분리하고 결과 부분을 key와 value 변수에 할당합니다.
        key, value = str.split()
        # maps 사전에 키-값 쌍을 저장합니다. 값은 정수로 변환된 후 28을 곱합니다.
        maps[key] = int(value) * 28

    # 입력 파라미터 "privacies"의 각 문자열과 그 인덱스에 대해 반복문을 실행합니다.
    for idx, privacie in enumerate(privacies):
        # 문자열을 공백으로 분리하고 결과 부분을 date_str과 termKey 변수에 할당합니다.
        date_str, termKey = privacie.split()

        # date_str을 '.'로 분리하고 각 부분을 정수로 변환합니다.
        # 세 부분을 year, month, day 변수에 저장합니다.
        year, month, day = map(int, date_str.split('.'))

        # maps 사전에서 termKey를 사용하여 termValue를 검색합니다.
        termValue = maps.get(termKey)

        # termValue가 None이 아닌 경우 다음 단계를 실행합니다.
        if termValue != None:
            # 주어진 날짜 "date_str"로부터 총 일수를 계산합니다.
            termData = day + (month * 28) + (year * 12 * 28) + termValue - 1

            # termData가 todayData 이하인 경우 인덱스 (idx+1)를 answer 리스트에 추가합니다.
            if termData < todayData:
                answer.append(idx + 1)

    # answer 리스트를 반환합니다.
    return answer
