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
 });

    