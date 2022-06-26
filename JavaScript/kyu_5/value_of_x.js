// https://www.codewars.com/kata/614ac445f13ead000f91b4d0/

const valueOfX = (input) => {
    const twoSides = input.split('= ');
    let sideA = ''; // will include the x
    let sideB = '';

    if (twoSides[0].includes('x')) {
        sideA = twoSides[0].split(' ');
        sideB = twoSides[1].split(' ');
    } else {
        sideB = twoSides[0].split(' ');
        sideA = twoSides[1].split(' ');
    }

    // move all number from the side with x to the other side
    for (let i = 0; i < sideA.length; i++) {
        if (sideA[i] === 'x') {
            i++;
        }
        if ((sideA[i] === '-') & (sideA[i + 1] !== 'x')) {
            sideB.push('+');
            sideB.push(sideA[i + 1]);
            i++;
            continue;
        } else if ((sideA[i] === '+') & (sideA[i + 1] !== 'x')) {
            sideB.push('-');
            sideB.push(sideA[i + 1]);
            i++;
            continue;
        } else if ((i === 0) & (sideA[i] !== '-')) {
            sideB.push('-');
            sideB.push(sideA[i]);
        }
    }

    const totalOfSideB = (side) => {
        let total = 0;
        for (let i = 0; i < side.length; i++) {
            if (side[i] === '-') {
                total -= Number(side[i + 1]);
                i++;
            } else if (side[i] === '+') {
                total += Number(side[i + 1]);
                i++;
            } else if (side[i] === 'x') {
                continue;
            } else {
                total += Number(side[i]);
            }
        }
        return total;
    };

    let totalB = totalOfSideB(sideB);

    if ((sideA[sideA.indexOf('x') - 1] === '-') & (totalB < 0)) {
        return Math.abs(totalB);
    } else if ((sideA[sideA.indexOf('x') - 1] === '-') & (totalB > 0)) {
        return -Math.abs(totalB);
    }
    return totalB;
};
