// https://www.codewars.com/kata/kebabize

function kebabize(str) {
    return str
        .replace(/[0-9]/g, '')
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
}
