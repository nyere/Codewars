// https://www.codewars.com/kata/58298e19c983caf4ba000c8d/javascript

const minUmbrellas = (weather) => {
    const badWeather = ['rainy', 'thunderstorms'];
    let homeHasUmbrella = 0;
    let workHasUmbrella = 0;
    let numOfUmbrellas = 0;
    let atHome = true;

    weather.forEach((condition) => {
        if (badWeather.includes(condition)) {
            if (atHome) {
                if (!homeHasUmbrella) {
                    numOfUmbrellas++;
                } else {
                    homeHasUmbrella--;
                }
                workHasUmbrella++;
                atHome = false;
                return;
            }
            if (!atHome) {
                // in other words they are at work
                if (!workHasUmbrella) {
                    numOfUmbrellas++;
                } else {
                    workHasUmbrella--;
                }
                homeHasUmbrella++;
                atHome = true;
                return;
            }
        } else {
            if (atHome) {
                atHome = false;
            } else {
                atHome = true;
            }
        }
        return;
    });

    return numOfUmbrellas;
};
