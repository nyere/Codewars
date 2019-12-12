// https://www.codewars.com/kata/prize-draw/javascript

function rank(st, we, n) {
    let names = st.split(',');
    let scores = [];
    if (!st) return 'No participants';
    if (n > names.length) return 'Not enough participants';
    for (i in names) {
        let score = 0;
        for (letter in names[i]) {
            score += names[i][letter].toLowerCase().charCodeAt(0) - 96;
        }
        scores.push([names[i], (score + names[i].length) * we[i]]);
    }
    scores
        .sort(function(a, b) {
            if (a[1] === b[1]) return a[0] < b[0];
            return a[1] - b[1];
        })
        .reverse();
    return scores[n - 1][0];
}

rank(
    'Olivai,Elijah,Naoh,Lyli,William,James,Abigail,Emily,Isabella,Madison,Ethan',
    [4, 5, 3, 6, 1, 1, 2, 5, 5, 3, 5],
    3
);
