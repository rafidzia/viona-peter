function countdown(date, cb) {
    let x;
    function sets(){
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = date - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // el.innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";

        // // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            cb([0, 0, 0, 0])
        } else {
            cb([days, hours, minutes, seconds])
        }
    }
    sets()
    x = setInterval(function () {
        sets()
    }, 1000);
}