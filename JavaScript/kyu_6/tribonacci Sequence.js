// https://www.codewars.com/kata/556deca17c58da83c00002db

const tribonacci = (signature, n) => {
    if (!n) {
        return [];
    } else if (n < 3) {
        return signature.slice(0, n);
    }

    const result = [...signature];
    for (let i = 0; i < n - 3; i++) {
        result.push(result[i] + result[i + 1] + result[i + 2]);
    }
    return result;
};
