// ?pname=Chips&pid=1044567&md=2020-06-10T10:45:56&ed=2020-09-15T10:45:56

function fresh(){

    const urlstring = window.location.search;

    const urlParams = new URLSearchParams(urlstring);
    

    const pname = urlParams.get('pname');
    const pid = urlParams.get('pid');
    const mandate = urlParams.get('md');
    var mdate = new Date(mandate);
    const expdate = urlParams.get('ed');
    var edate = new Date(expdate);

    document.getElementById("pimg").src = "./images/" + pname + ".png";
    document.getElementById("pname").innerHTML = pname;
    document.getElementById("prodid").innerHTML = pid;
    document.getElementById("expdate").innerHTML = formatAMPM();

    function formatAMPM() {
    var d = edate,
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear();//+' '+hours+':'+minutes+ampm
    }

    var countDownDate = new Date(edate).getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
            document.getElementById("countdown").style.color = "#c0392b";
        }

    }, 1000);

}