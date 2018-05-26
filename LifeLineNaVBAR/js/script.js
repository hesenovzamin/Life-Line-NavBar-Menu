$(document).ready(function () {

    var count = 0;
    $(".axtar>a").on("click", function () {

        count++;
        console.log(count);

        if (count % 2 != 0) {
            $(".axtar-qutusu").css("visibility", "visible");
            $(".axtar-qutusu").css("opacity", "1");
            $(".axtar-qutusu").css("transition", "0.5s ease");
        }
        else {
            $(".axtar-qutusu").css("visibility", "hidden");
            $(".axtar-qutusur").css("transition", "0.5s ease");
            $(".axtar-qutusu").css("opacity", "0");
        }

       
       
    })

})
