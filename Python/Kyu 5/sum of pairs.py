# https://www.codewars.com/kata/sum-of-pairs


def sum_pairs(ints, s=0):
    intsSet = set(ints)
    indexesa = []
    for i in intsSet:
        result = s - i
        if result in intsSet:
            indexesa += [x for x, v in enumerate(ints) if v == i]
    indexesa = list(sorted(indexesa))
    l2 = []
    for i in indexesa:
        for x in range(len(indexesa)):
            if ints[i] + ints[indexesa[x]] == s and i != indexesa[x] and i < indexesa[x]:
                if len(l2) == 0:
                    l2 = [i, indexesa[x]]
                elif indexesa[x] < l2[1]:
                    l2 = [i, indexesa[x]]
    if len(l2) == 0:
        return None
    else:
        l2 = list(sorted(l2))
        return [ints[l2[0]], ints[l2[1]]]
