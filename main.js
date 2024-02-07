function coutdown(){
    const countDate = new Date('1 Jan,2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    document.getElementById('day').innerHTML = Math.floor(gap / day);
    document.getElementById('hour').innerHTML = Math.floor((gap % day) / hour);
    document.getElementById('minute').innerHTML = Math.floor((gap % hour) / minute);
    document.getElementById('second').innerHTML = Math.floor((gap % minute) / second);
    setInterval(coutdown, 1000);
}

coutdown()