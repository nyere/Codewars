// https://www.codewars.com/kata/human-readable-time

function humanReadable(seconds) {
    let h = 0;
    let min = 0;
    let sec = 0;
    while (seconds > 0) {
        if (seconds >= 3600) {
            h++;
            seconds -= 3600;
            continue;
        }
        if (seconds >= 60) {
            min++;
            seconds -= 60;
            continue;
        }
        if (seconds < 60) {
            sec = seconds;
            seconds = 0;
        }
    }

    if (h < 10) {
        h = '0' + h.toString();
    }
    if (min < 10) {
        min = '0' + min.toString();
    }
    if (sec < 10) {
        sec = '0' + sec.toString();
    }

    return `${h}:${min}:${sec}`;
}
