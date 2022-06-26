# https://www.codewars.com/kata/simple-fun-number-166-best-match


def best_match(goals1, goals2):
    diff = max(goals1) - min(goals2)
    result = []
    for i in range(len(goals1)):
        if goals1[i] - goals2[i] < diff:
            result = [i]
            diff = goals1[i] - goals2[i]
        elif goals1[i] - goals2[i] == diff:
            result.append(i)
    dict_sol = {}
    for i in result:
        dict_sol[i] = goals2[i]
    return max(dict_sol, key=dict_sol.get)
