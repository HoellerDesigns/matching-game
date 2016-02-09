/*
 *
 * main.js for Matching Game
 *
 * Developed by Nathan Hoeller
 * www.hoellerdesigns.com
 *
 */

jQuery(function($) {

    // Fastclick script used to load touch functions faster
    $(function() {
        FastClick.attach(document.body);
    });

    // Set Custom Cards Here:
    var cardArray = [
        "A.jpg",
        "B.jpg",
        "C.jpg",
        "D.jpg",
        "E.jpg",
        "F.jpg"
    ];
    // Set Path to Card Images Here:
    var imgSrc = "img/";

    // Set the initial click value to 0
    var clickCount = 0;

    // Loop through each card in the array and generate HTML for the matching pair
    var deckOutput = "";
    var cardCount = cardArray.length;
    var count = 1;
    for (i = 0; i < cardCount; i++) {
        var output = '<div class="flip-container">'
                +'<div id="card'+count+'" data-card="'+count+'" class="card">'
                    +'<div class="front"></div>'
                    +'<div class="back"><img src="'+imgSrc+cardArray[i]+'"/></div>'
                +'</div>'
            +'</div>';
        count++;
        output += '<div class="flip-container">'
                +'<div id="card'+count+'" data-card="'+count+'" class="card">'
                    +'<div class="front"></div>'
                    +'<div class="back"><img src="'+imgSrc+cardArray[i]+'"/></div>'
                +'</div>'
            +'</div>';
        count++;
        deckOutput += output;
    }
    $("#deck").html(deckOutput);

    randomize(); // Randomize the order of the cards

    var numFlips = 0;
    $(".card").click(function() {
        // Update click count
        clickCount++;
        $("#clickCount span").html(clickCount);

        if (!($(this).hasClass("matched"))) {
            numFlips = $('.flip').length;
            if (numFlips < 1) {
                $(this).addClass("flip");
            } else {
                $(this).addClass("flip");
                checkMatch();
            }
        }
    });

    $("#resetCards").click(function() {
        $(".card").removeClass("flip matched");
        $("#clickCount span").html("0");
        setTimeout(function(){
            randomize();
        }, 500);
    });
}); // Document Ready


function randomize(){
    //get list of divs
    var deck = $(".flip-container").toArray();

    //randomly print them back out.
    while(deck.length > 0) {
        var idx = Math.floor(Math.random() * deck.length);
        var element = deck.splice(idx, 1);
        $('#deck').append(element[0]);
    }
}


function isOdd(num) {
    return num % 2;
}


function checkMatch() {
    var count = 0;
    var c1 = "";
    $(".flip").each(function(i) {
        var cardNum = $(this).data("card");
        if (count === 0) {
            c1 = cardNum;
            count++;
        } else {
            var c1Match = (isOdd(c1)) ? c1 + 1 : c1 - 1;
            if (c1Match === cardNum) {
                $("#card"+c1).addClass("matched").removeClass("flip");
                $("#card"+cardNum).addClass("matched").removeClass("flip");
            } else {
                setTimeout(function(){
                    $(".card").removeClass("flip");
                }, 700);
            }
        }
    });
    finished(); // Check if game is finished
}


function finished() {
    var cardCount = $(".card").length;
    if ($(".matched").length === cardCount) {
        setTimeout(function(){
            alert("Contratulations! You win!");
        }, 700);
    }
}
