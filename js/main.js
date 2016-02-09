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
        "E.jpg"
    ];
    // Set Path to Card Images Here:
    var imgSrc = "img/";


    // Loop through each card in the array and generate HTML for the matching pair
    var cardboxOutput = "";
    var cardCount = cardArray.length;
    var count = 1;
    for (i = 0; i < cardCount; i++) {
        var output = '<div class="flip-container">'
                +'<div id="card'+count+'" class="card">'
                    +'<div class="front"></div>'
                    +'<div class="back"><img src="'+imgSrc+cardArray[i]+'"/></div>'
                +'</div>'
            +'</div>';
        count++;
        output += '<div class="flip-container">'
                +'<div id="card'+count+'" class="card">'
                    +'<div class="front"></div>'
                    +'<div class="back"><img src="'+imgSrc+cardArray[i]+'"/></div>'
                +'</div>'
            +'</div>';
        count++;
        cardboxOutput += output;
    }
    $("#cardbox").html(cardboxOutput);

    var card1Checked = null;
    var card2Checked = null;
    var card3Checked = null;
    var card4Checked = null;
    var card5Checked = null;
    var card6Checked = null;
    var card7Checked = null;
    var card8Checked = null;
    var card9Checked = null;
    var card10Checked = null;


    // Randomize the order of the cards
    randomize();

    var numFlips = 0;
    $(".card").click(function() {
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
        setTimeout(function(){
            randomize();
        }, 500);
    });
});


function isOdd(num) {
    return num % 2;
}

function checkMatch() {
    var checkCards = $(".flip").toArray();
    var c1 = checkCards[0].attr("id");
    var c2 = checkCards[1];
    //var c1ID = c1.attr("id");
    //var c2ID = c2.attr("id");

    // return id, then remove "card" string
    console.log(c1);
    console.log(c2);

    if (isOdd(c1)) {
        // It's match would need to be plus one.
        if (Number(c1) + 1 === c2) {
            console.log("MATCH!");
        } else {
            setTimeout(function(){
                $(".card").removeClass("flip");
            }, 700);
        }
    } else {
        // It's match would need to be minus one.
        if (Number(c1) - 1 === c2) {
            console.log("MATCH!");
        } else {
            setTimeout(function(){
                $(".card").removeClass("flip");
            }, 700);
        }
    }

    finished();

    /*$(".flip").each(function(i) {
        var cardID = $(this).attr('id');
        var cardNum = cardID.replace('card', '');
        if (isOdd(cardNum)) {
            console.log(cardNum+" is Odd");
        } else {
            console.log(cardNum);
        }
    });*/
    /*card1Checked = $("#card1.flip").length;
    card2Checked = $("#card2.flip").length;
    card3Checked = $("#card3.flip").length;
    card4Checked = $("#card4.flip").length;
    card5Checked = $("#card5.flip").length;
    card6Checked = $("#card6.flip").length;
    card7Checked = $("#card7.flip").length;
    card8Checked = $("#card8.flip").length;
    card9Checked = $("#card9.flip").length;
    card10Checked = $("#card10.flip").length;
    if ((card1Checked === 1) && (card2Checked === 1)) {
        $("#card1").addClass("matched").removeClass("flip");
        $("#card2").addClass("matched").removeClass("flip");
    } else if ((card3Checked === 1) && (card4Checked === 1)) {
        $("#card3").addClass("matched").removeClass("flip");
        $("#card4").addClass("matched").removeClass("flip");
    } else if ((card5Checked === 1) && (card6Checked === 1)) {
        $("#card5").addClass("matched").removeClass("flip");
        $("#card6").addClass("matched").removeClass("flip");
    } else if ((card7Checked === 1) && (card8Checked === 1)) {
        $("#card7").addClass("matched").removeClass("flip");
        $("#card8").addClass("matched").removeClass("flip");
    } else if ((card9Checked === 1) && (card10Checked === 1)) {
        $("#card9").addClass("matched").removeClass("flip");
        $("#card10").addClass("matched").removeClass("flip");
    } else {
        setTimeout(function(){
            $(".card").removeClass("flip");
        }, 700);
    }
    finished();*/
};

function finished() {
    if ($(".matched").length === 10) {
        setTimeout(function(){
            alert("Contratulations! You win!");
        }, 700);
    }
};

function randomize(){
    //get list of divs
    var deck = $(".flip-container").toArray();

    //randomly print them back out.
    while(deck.length > 0) {
        var idx = Math.floor(Math.random() * deck.length);
        var element = deck.splice(idx, 1);
        $('#cardbox').append(element[0]);
    }
};
