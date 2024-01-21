const frame = document.getElementById('frame');
const body = document.getElementsByTagName('body');
const contents = document.getElementsByClassName('content');
body[0].style.height = contents.length * window.innerHeight + "px"
let lastScroll = 0
let statusScroll = "down"
frame.onscroll = function (e) {
    // console.log(e)
    if(statusScroll == "down" && frame.scrollTop < lastScroll){
        return
    } else if (statusScroll == "up" && frame.scrollTop > lastScroll){
        return
    }
    if (frame.scrollTop > lastScroll) {
        statusScroll = "down"
    } else if (frame.scrollTop < lastScroll) {
        statusScroll = "up"
    }
    console.log(frame.scrollTop)
    window.scroll(0, frame.scrollTop);
    lastScroll = frame.scrollTop
}

window.onresize = function () {
    body[0].style.height = contents.length * window.innerHeight + "px"
}

// frame.addEventListener('click', function () {
//     requestFullScreen(frame);
// })

AOS.init({
    duration: 1200, // values from 0 to 3000, with step 50ms
});



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

let recipient = getQueryVariable("to")

if (recipient.length > 0) {
    recipient = recipient.replaceAll("+", " ");
    recipient = recipient.replaceAll("%20", " ");
    document.getElementById("recipient").innerHTML = recipient;
}

document.getElementById('cover').style.display = 'none';
