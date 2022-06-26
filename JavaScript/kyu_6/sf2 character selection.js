// https://www.codewars.com/kata/5853213063adbd1b9b0000be

const fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
const position = [0, 0];
const moves = ['up', 'left', 'right', 'left', 'down'];

const streetFighterSelection = (fighters, position, moves) => {
    const selectedChars = [];
    const pos = [...position];

    moves.forEach((move) => {
        if (move === 'up') {
            pos[0] = 0;
        } else if (move === 'down') {
            pos[0] = 1;
        } else if (move === 'left') {
            if (pos[1] === 0) {
                pos[1] = 5;
            } else {
                pos[1] = pos[1] - 1;
            }
        } else if (move === 'right') {
            if (pos[1] === 5) {
                pos[1] = 0;
            } else {
                pos[1] = pos[1] + 1;
            }
        }
        selectedChars.push(fighters[pos[0]][pos[1]]);
    });

    return selectedChars;
};
