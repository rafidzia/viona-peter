const frame = document.getElementById('frame');
const body = document.getElementsByTagName('body');
const contents = document.getElementsByClassName('content');
body[0].style.height = contents.length * window.innerHeight + "px"

const dueDate = new Date("May 2, 2025 08:00:00")


document.documentElement.scrollTop = 0
document.documentElement.scrollLeft = 0

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        frame.pageYOffset 
        ||
        document.documentElement.scrollTop;
    scrollLeft =
        frame.pageXOffset 
        ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        frame.onscroll = function () {
            frame.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    frame.onscroll = function(e) {
        window.scroll(0, frame.scrollTop);
    }
}

disableScroll()

countdown(dueDate.getTime(), ([days, hours, minutes, seconds]) => {
    // document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
});

// let lastScroll = 0
// let statusScroll = "down"
// frame.onscroll = function (e) {
//     // console.log(e)
//     // if(Math.abs(frame.scrollTop - lastScroll) > 500) {
//     //     if(statusScroll == "down" && frame.scrollTop < lastScroll){
//     //         return
//     //     } else if (statusScroll == "up" && frame.scrollTop > lastScroll){
//     //         return
//     //     }
//     // }
//     // if (frame.scrollTop > lastScroll) {
//     //     statusScroll = "down"
//     // } else if (frame.scrollTop < lastScroll) {
//     //     statusScroll = "up"
//     // }
//     // if(frame.scrollTop < lastScroll) {
//     //     return
//     // }
//     // console.log(frame.scrollTop)
//     window.scroll(0, frame.scrollTop);
//     console.log(frame.scrollTop)
//     // lastScroll = frame.scrollTop
// }

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


const videoInit = document.getElementById("video1")
const videopic = document.getElementById("videopic")


document.getElementById("title-btn").addEventListener("click", function () {
    enableScroll()
    audio.play()
    requestFullScreen(frame);
    setTimeout(() => {
        frame.scrollTo(0, window.innerHeight);
        // setTimeout(() => {
        //     disableScroll()
        // }, 1500);
        videoInit.play()
        setTimeout(()=>{
            videopic.style.width = videoInit.offsetWidth + "px"
        }, 100)
    }, 500)
})

videoInit.onended = function () {
    enableScroll()
    videopic.style.opacity = "1";
    videoInit.src = "./res1/vid_loop.mp4"
    videoInit.play()
    videoInit.loop = true
    setTimeout(() => {
        frame.scrollTo(0, window.innerHeight + frame.scrollTop);
    }, 1500)
}



let recipient = getQueryVariable("to")

if (recipient.length > 0) {
    recipient = recipient.replaceAll("+", " ");
    recipient = decodeURIComponent(recipient);
    document.getElementById("recipient").innerHTML = recipient;
}

const copy1 = document.getElementById("clone-1")
const copy2 = document.getElementById("clone-2")
const copy3 = document.getElementById("clone-3")
copy1.addEventListener("click", function () {
    navigator.clipboard.writeText("901125082388")
    // alert("Nomor Rekening 901125082388 telah disalin ke clipboard")
}) 
copy2.addEventListener("click", function () {
    navigator.clipboard.writeText("5050069763")
    // alert("Nomor Rekening 5050069763 telah disalin ke clipboard")
})
copy3.addEventListener("click", function () {
    navigator.clipboard.writeText("Apartemen Puri Park View, tower C blok CB16/09, Kembangan, Kedoya Selatan, Jakarta Barat")
    // alert("Alamat telah disalin ke clipboard")
})


// if (document.getElementById('cover')) {
//     document.getElementById('cover').style.display = 'none';
// }
const x = setInterval(()=>{
    if (document.readyState === "complete") {
        clearInterval(x)
        document.getElementById('cover').style.display = 'none';
    }
}, 100)
