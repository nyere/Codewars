# https://www.codewars.com/kata/the-hunger-games-zoo-disaster


def who_eats_who(zoo):
    whoeatswho = ["antelope eats grass", "big-fish eats little-fish", "bug eats leaves", "bear eats big-fish",
                  "bear eats bug", "bear eats chicken", "bear eats cow", "bear eats leaves", "bear eats sheep",
                  "chicken eats bug", "cow eats grass", "fox eats chicken", "fox eats sheep",
                  "giraffe eats leaves", "lion eats antelope", "lion eats cow", "panda eats leaves",
                  "sheep eats grass"]
    result = [zoo]
    zoo = zoo.split(",")
    count = 0
    while len(zoo) != 1:
        if count == 0:
            if "%s eats %s" % (zoo[count], zoo[count + 1]) in whoeatswho:
                result.append("%s eats %s" % (zoo[count], zoo[count + 1]))
                zoo.pop(count+1)
            else:
                count += 1
        elif count == len(zoo) - 1:
            if "%s eats %s" % (zoo[count], zoo[count - 1]) in whoeatswho:
                result.append("%s eats %s" % (zoo[count], zoo[count - 1]))
                zoo.pop(count - 1)
                count = 0
            else:
                break
        else:
            if "%s eats %s" % (zoo[count], zoo[count - 1]) in whoeatswho:
                result.append("%s eats %s" % (zoo[count], zoo[count - 1]))
                zoo.pop(count - 1)
                count = 0
            elif "%s eats %s" % (zoo[count], zoo[count + 1]) in whoeatswho:
                result.append("%s eats %s" % (zoo[count], zoo[count + 1]))
                zoo.pop(count + 1)
                count = 0
            else:
                count += 1
    result.append(",".join(zoo))
    return result
