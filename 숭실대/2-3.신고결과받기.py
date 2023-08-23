def solution(id_list, report, k):
    answer = []
    report_list = {}

    return answer


id_list = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
k = 2

# 한사람이 여러번 신고해도 1번 신고와 같음
# k번 이상 신고되면 경고메일받음
# 내가 신고한 사람이 경고메일 받으면 내 실적 +1

# 다른사람풀이: 1등


def solution(id_list, report, k):
    answer = [0] * len(id_list)
    reports = {x: 0 for x in id_list}

    for r in set(report):
        reports[r.split()[1]] += 1

    for r in set(report):
        if reports[r.split()[1]] >= k:
            answer[id_list.index(r.split()[0])] += 1

    return answer

# 다른사람풀이: 2등


def solution(id_list, report, k):
    answer = [0] * len(id_list)
    dic_report = {id: [] for id in id_list}  # 해당 유저를 신고한 ID
    for i in set(report):
        i = i.split()
        dic_report[i[1]].append(i[0])

    for key, value in dic_report.items():
        if len(value) >= k:
            for j in value:
                answer[id_list.index(j)] += 1

    return answer

# 다른사람풀이: 3등


def solution(id_list, report, k):
    answer = []
    a = list(set(report))
    dictionary2 = {name: 0 for name in id_list}
    dictionary = {name: [] for name in id_list}
    for i in a:
        dictionary[i.split()[1]].append(i.split()[0])

    for i in dictionary:
        if len(dictionary[i]) >= k:
            for j in dictionary[i]:
                dictionary2[j] += 1

    for i in dictionary2:
        answer.append(dictionary2[i])

    return answer

# 23.08.22 수업시간 풀이

    # 신고당한 유저를 키로, 신고한 유저를 값으로 딕셔너리를 사용하여 목록 리스트를 저장(Set 추가 활용)
    # 위 리스트를 순회하며 각 유저가 몇번 신고되었는지 확인(딕셔너리 활용)
    # 결국 배열로 데이터가 저장됨

    """
    "muzi": ["apeach"]
    "frodo" ["muzi", "apeach"]
    "apeach": []
    "neo": ["muzi", "frodo"]
    """

    # 위 리스트를 순회하며, value의 길이가 2가 넘는다면 value(현재 리스트)를 다시 순회
    # 찾은 유저를 미리 만든 딕셔너리에서 찾아온 후(복잡도 O(1)) 해당 값을 1 증가

    """ k가 2라면(2번 이상 신고당한 사람만 정지라면)
    "muzi": ["apeach"] -> 2보다 작으므로 순회하지 않음
    "frodo" ["muzi", "apeach"] -> 2보다 크므로 순회
        새로운 딕셔너리의 muzi를 1로 증가 -> muzi는 1개의 메일을 받음
        새로운 딕셔너리의 apeach 1로 증가 -> apeach는 1개의 메일을 받음
    "apeach": [] -> 2보다 작으므로 순회하지 않음
    "neo": ["muzi", "frodo"] -> 2보다 크므로 순회
        새로운 딕셔너리의 muzi를 2로 증가 -> muzi는 2개의 메일을 받음
        새로운 딕셔너리의 frodo를 1로 증가 -> frodo는 1개의 메일을 받음
    """

    # 위 리스트를 list로 변환 후 반환


def solution(id_list, reports, k):
    reported = {id: set() for id in id_list}  # 각 id에 대한 신고한 사용자 목록을 저장할 딕셔너리
    # 위 코드가 어렵다면 아래 코드를 사용하셔도 됩니다.
    # reported = {}
    # for id in id_list:
    #     reported[id] = set()

    report_count = {id: 0 for id in id_list}  # 각 id가 몇 번 메일을 받아야 하는지 저장할 딕셔너리
    # 위 코드가 어렵다면 아래 코드를 사용하셔도 됩니다.
    # report_count = {}
    # for id in id_list:
    #     report_count[id] = 0

    # 중복된 신고를 제거한 후, 각 신고에 대하여 반복문을 실행합니다.
    for i in set(reports):
        # 신고를 공백으로 분리하여 report라는 리스트에 저장합니다.
        reporter, reported_id = i.split(' ')
        # 신고한 사용자의 id를 key로 사용하여, 신고받은 사용자의 id를 reported에 추가합니다.
        reported[reported_id].add(reporter)

    # 각 id에 대하여 신고한 사용자 목록을 확인하며, k 이상인 경우 report_count를 증가시킵니다.
    for reported_id, reporters in reported.items():
        if len(reporters) >= k:
            for reporter in reporters:
                report_count[reporter] += 1

    # report_count의 값을 answer 리스트로 변환하여 반환합니다.
    return [report_count[id] for id in id_list]
