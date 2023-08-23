# 23.08.22 미리풀기X => 시간초과
def solution(players, callings):
    for x in callings:
        curindex = (players.index(x))
        players[curindex], players[curindex -
                                   1] = players[curindex-1], players[curindex]

    return players


players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]
print(solution(players, callings))
