jQuery(function($) {
    var numFlips = 0;
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
    $("#card1 .back").html("<img src='img/A.jpg'/>");
    $("#card2 .back").html("<img src='img/A.jpg'/>");
    $("#card3 .back").html("<img src='img/B.jpg'/>");
    $("#card4 .back").html("<img src='img/B.jpg'/>");
    $("#card5 .back").html("<img src='img/C.jpg'/>");
    $("#card6 .back").html("<img src='img/C.jpg'/>");
    $("#card7 .back").html("<img src='img/D.jpg'/>");
    $("#card8 .back").html("<img src='img/D.jpg'/>");
    $("#card9 .back").html("<img src='img/E.jpg'/>");
    $("#card10 .back").html("<img src='img/E.jpg'/>");
    $(function() {
        FastClick.attach(document.body);
    });

    randomize();
    
    
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

function checkMatch(){
    card1Checked = $("#card1.flip").length;
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
    finished();
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