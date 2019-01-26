




var counter = document.getElementById( "count-number" );

var limit = parseInt( counter.innerHTML );

var day = 727;

counter.innerHTML = "0";

var pause = 50;

var interval = setInterval( function () {

    if ( day < limit ) {

        increment();


    } else {
        clearInterval( interval );
    }

}, pause);






function increment() {
    day++;

    counter.innerHTML = day.toString();
}


