// https://www.codewars.com/kata/52e1476c8147a7547a000811

const validate = (password) => {
    if (password.length < 6 || /[\W]/g.test(password)) {
        return false;
    }
    if (/[a-z]/g.test(password)) {
        if (/[A-Z]/g.test(password)) {
            if (/[0-9]/g.test(password)) {
                return true;
            }
        }
    }

    return false;
};
