// https://www.codewars.com/kata/loose-change

function looseChange(cents) {
    cents = Math.floor(cents);
    let coins = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
    if (cents <= 0) {
        return coins;
    }
    while (cents > 0) {
        while (cents >= 25) {
            coins.Quarters++;
            cents -= 25;
        }
        while (cents >= 10) {
            coins.Dimes++;
            cents -= 10;
        }
        while (cents >= 5) {
            coins.Nickels++;
            cents -= 5;
        }
        coins.Pennies = cents;
        cents = 0;
    }
    return coins;
}
