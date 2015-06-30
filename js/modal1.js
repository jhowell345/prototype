$(document).ready(function() {
    $("#quoteorsharelinebutton").on("click", hideAll);
        function hideAll() {
            $(".reveal").hide()
    }

    $("#quotesorshareline .quotebutton").on("click", hideShareLine);
    
    function hideShareLine() {
        $(".reveal").show()
        $(".shareline").hide()
        $(".quote").show()
        document.getElementById("selector").innerHTML = "Quote"       
    }

    $("#quotesorshareline .sharelinebutton").on("click", hideQuote);

    function hideQuote() {
        $(".reveal").show()
        $(".quote").hide()
        $(".shareline").show()
        document.getElementById("selector").innerHTML = "Share Line"     
    }
    
    $("#quotesorshareline .add_shortcode").on("click", addShortcode1);

    function addShortcode1() {

        // TODO - this is basic output from the form
        var shortcode = $("#quotesorshareline form").serialize();
        $("#comment").text(shortcode);
        console.log("adding shortcode for Quotes1: " + shortcode);

        // close the modal
        $("#quotesorshareline .close-me").click();
        console.log("closing modal")
    }


    $("#quotesorshareline .add_new_line").on("click", addShareline);

    function addShareline() {
        var html = "",
            count = $("#quotesorshareline input").length - 2;


        html +='<div class="form-group">'
        html +='  <label for="caption">Share Line ' + count + '</label>'
        html +='  <input type="text" class="form-control" name="shareline' + count + '" placeholder="Type/paste Share Line here!" style="width:90%" maxlength="150" required>'
        html +='</div>'

        // document.getElementById("share").innerHTML(html);

        $("#quotesorshareline .form-group:last").after(html);

        console.log("Adding new line");

    }

 });

    