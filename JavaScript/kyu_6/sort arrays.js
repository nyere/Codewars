// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

const sortme = (array) => {
    return array.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
};
