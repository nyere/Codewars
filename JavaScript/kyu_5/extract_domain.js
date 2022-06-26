// https://www.codewars.com/kata/514a024011ea4fb54200004b

const domainName = (string) => {
    return string
        .replace(/^https?:\/\//, '')
        .replace(/^www./, '')
        .split('.')[0];
};

console.log(domainName('google.com'));
