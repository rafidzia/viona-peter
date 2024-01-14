const frame = document.getElementById('frame');
const body = document.getElementsByTagName('body');
const contents = document.getElementsByClassName('content');
body[0].style.height = contents.length * window.innerHeight + "px"
frame.onscroll = function () {
    window.scroll(0, frame.scrollTop);
}

// frame.addEventListener('click', function () {
//     requestFullScreen(frame);
// })

AOS.init({
    duration: 1200, // values from 0 to 3000, with step 50ms
});

document.getElementById('cover').style.display = 'none';


countdown(new Date("Feb 3, 2024 13:00:00").getTime(), ([days, hours, minutes, seconds]) => {
    // document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
});


document.getElementById("title-btn").addEventListener("click", function () {
    requestFullScreen(frame);
    setTimeout(() => {
        frame.scrollTo(0, window.innerHeight);
    }, 500)
})