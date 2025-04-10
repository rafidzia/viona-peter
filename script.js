const frame = document.getElementById('frame');
const body = document.getElementsByTagName('body');
const contents = document.getElementsByClassName('content');
body[0].style.height = contents.length * window.innerHeight + "px"

const dueDate = new Date("May 2, 2025 08:00:00")

countdown(dueDate.getTime(), ([days, hours, minutes, seconds]) => {
    // document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
});

// let lastScroll = 0
// let statusScroll = "down"
frame.onscroll = function (e) {
    // console.log(e)
    // if(Math.abs(frame.scrollTop - lastScroll) > 500) {
    //     if(statusScroll == "down" && frame.scrollTop < lastScroll){
    //         return
    //     } else if (statusScroll == "up" && frame.scrollTop > lastScroll){
    //         return
    //     }
    // }
    // if (frame.scrollTop > lastScroll) {
    //     statusScroll = "down"
    // } else if (frame.scrollTop < lastScroll) {
    //     statusScroll = "up"
    // }
    // if(frame.scrollTop < lastScroll) {
    //     return
    // }
    // console.log(frame.scrollTop)
    window.scroll(0, frame.scrollTop);
    // lastScroll = frame.scrollTop
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

const audio = document.getElementById("audio")
const toggle = document.getElementById("toggle")

let muted = false

audio.volume = 0.3

toggle.addEventListener("click", function () {
    if(!muted){
        audio.pause()
        muted = true
        toggle.children[0].src = "./res/mute.png"
    }else{
        audio.play()
        muted = false
        toggle.children[0].src = "./res/volume.png"
    }
})


document.getElementById("title-btn").addEventListener("click", function () {
    audio.play()
    requestFullScreen(frame);
    setTimeout(() => {
        frame.scrollTo(0, window.innerHeight);
    }, 500)
})

let recipient = getQueryVariable("to")

if (recipient.length > 0) {
    recipient = recipient.replaceAll("+", " ");
    recipient = decodeURIComponent(recipient);
    document.getElementById("recipient").innerHTML = recipient;
}

if (document.getElementById('cover')) {
    document.getElementById('cover').style.display = 'none';
}


