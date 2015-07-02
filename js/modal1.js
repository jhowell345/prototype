$(document).ready(function() {

    var text_max = 250;
    $(".quotecountdown").text(text_max + " characters remaining.");

    $(".quotetext").keyup(function() {
        var text_length = $(".quotetext").val().length;
        var text_remaining = text_max - text_length;

        $(".quotecountdown").text(text_remaining + " characters remaining");
        if (text_remaining<=10) {
            $("#jungle").css("color","red");
        }
        if (text_remaining>10) {
            $("#jungle").css("color","grey");
        }
    });


    $("#quoteorsharelinebutton").on("click", hideAll);
   
    function hideAll() {
            $(".reveal").hide()
    };

    $("#quotesorshareline .quotebutton").on("click", hideShareLine);

    function hideShareLine() {
        $(".reveal").show();
        $(".shareline").hide();
        $(".quote").show();
        document.getElementById("selector").innerHTML = "Quote";      
    };

    $("#quotesorshareline .sharelinebutton").on("click", hideQuote);

    function hideQuote() {
        $(".reveal").show();
        $(".quote").hide();
        $(".shareline").show();
        $(".remove").hide();
        document.getElementById("selector").innerHTML = "Share Line";    
    };
    
    $("#quotesorshareline .add_shortcode").on("click", addShortcode1);

    function addShortcode1() {

        // TODO - this is basic output from the form
        var shortcode = $("#quotesorshareline form").serialize();

        if ($("#author").val().length == 0 || $("#authordescription").val().length == 0 || $(".quotetext").val().length == 0) {
            $("#puma").text("All text fields are required");
        }
        else {
            $("#comment").text(shortcode);
            console.log("adding shortcode for Quotes1: " + shortcode);

            // close the modal
            $("#quotesorshareline .close-me").click();
            console.log("closing modal");
            console.log($("#author").val().length)
        }
    };


    $("#quotesorshareline .add_new_line").on("click", addShareline);

    function addShareline() {
        var html = "",
            count = $("#quotesorshareline input").length-2;
            
        html +='<div class="form-group shareline cheetah">'
        html +='  <label for="caption">Share Line ' + count + '</label>'
        html +='  <input type="text" class="form-control" name="shareline' + count + '" placeholder="Type/paste Share Line here!" style="width:90%" maxlength="150" required>'
        html +='</div>'
        $(".remove").show()
        $("#quotesorshareline .form-group:last").after(html);

        console.log("Adding line " + count);
    };

    $(".remove").on("click", removeShareline)
    
    function removeShareline() {
        $(".cheetah:last-child").remove();
        var count = $("#quotesorshareline input").length-2;
        console.log("Removing line " + count)
     };

        // document.getElementById("share").innerHTML(html);



 });

    