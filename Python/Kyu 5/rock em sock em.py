# https://www.codewars.com/kata/80-s-kids-number-6-rock-em-sock-em-robots


def fight(robot_1, robot_2, tactics):
    if robot_1["speed"] >= robot_2["speed"]:
        first, second = robot_1, robot_2
    else:
        first, second = robot_2, robot_1
    attacks1, attacks2 = len(first["tactics"]), len(second["tactics"])
    rounds = max(attacks1, attacks2)
    for i in range(rounds):
        if attacks1 > 0:
            second["health"] -= tactics[first["tactics"][i]]
            attacks1 -= 1
            if second["health"] <= 0:
                return "%s has won the fight." % (first["name"])
        if attacks2 > 0:
            first["health"] -= tactics[second["tactics"][i]]
            attacks2 -= 1
            if first["health"] <= 0:
                return "%s has won the fight." % (second["name"])
    if first["health"] > second["health"]:
        return "%s has won the fight." % (first["name"])
    elif second["health"] > first["health"]:
        return "%s has won the fight." % (second["name"])
    else:
        return "The fight was a draw."
