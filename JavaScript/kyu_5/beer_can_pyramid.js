// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

const beeramid = (bonus, beerPrice) => {
    if (bonus <= 0) {
        return 0;
    }

    let completedLevels = 0;
    let hasMoney = true;
    let currentLevel = 1;
    let currentMoney = bonus;

    while (hasMoney) {
        if (currentMoney >= currentLevel * currentLevel * beerPrice) {
            currentMoney -= currentLevel * currentLevel * beerPrice;
            completedLevels++;
            currentLevel++;
        } else {
            hasMoney = false;
        }
    }

    return completedLevels;
};
