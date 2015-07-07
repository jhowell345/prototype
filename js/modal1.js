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

   

///////

// validation
$('.modal').on('keyup blur', "#author, #authordescription, #quotecontent, input.shareline", function () { 
    validateInput(this);
});


function validateInput(item) {

        var pattern = '',
            item_value = $(item).val(),
            type = $('.modal .dropdown-toggle').text();


        switch(type) {
            case('Quote'):
                pattern = /[\s\S]/;
                break;
            case('Share Line'):
                pattern = /[\s\S]/;
                break;
        }

        if (item_value.match(pattern) && item_value !== '' ) {

            $(item).parent('.form-group').removeClass('has-error');
            $(item).parent('.form-group').addClass('has-success');
        } else {

            $(item).parent('.form-group').addClass('has-error');
            $(item).parent('.form-group').removeClass('has-success');
        }
    }

///////





    $("#quotesorshareline .quotebutton").on("click", hideShareLine);

    function hideShareLine() {
        $(".reveal").show();
        $("#quotesorshareline .shareline").hide();
        $("#quotesorshareline .quote").show();
        document.getElementById("selector").innerHTML = "Quote";      
    };

    $("#quotesorshareline .sharelinebutton").on("click", hideQuote);

    function hideQuote() {
        $(".reveal").show();
        $(".quote").hide();
        $(".shareline").show();
        $(".remove_shareline").hide();
        document.getElementById("selector").innerHTML = "Share Line";    
    };
    
    $("#quotesorshareline .add_shortcode").on("click", insertShortcode1);

    function insertShortcode1() {

        // TODO - this is basic output from the form
        var sharelineshortcode = $("#quotesorshareline form.shareline").serialize();
        var quoteshortcode = $("#quotesorshareline form.quote").serialize();
        var linktype = $('.modal .dropdown-toggle').text();
        switch(linktype) {
            case "Share Line":
                if ($(".modal input.shareline").val().length == 0) {
                    alert("All text fields are required");
                }

                else {
                    $("#comment").text(sharelineshortcode);
                    console.log("adding shortcode for Quotes1: " + sharelineshortcode);

                    // close the modal
                    $("#quotesorshareline .close-me").click();
                    console.log("closing modal"); 
          
                }
                break;
            case "Quote":
                if ($("#author").val().length == 0 || $("#authordescription").val().length == 0 || $(".quotetext").val().length == 0) {
                    alert("All text fields are required");
                }
                else {
                    $("#comment").text(quoteshortcode);
                    console.log("adding shortcode for Quotes1: " + quoteshortcode);

                    // close the modal
                    $("#quotesorshareline .close-me").click();
                    console.log("closing modal");   
                }
                break;
            }          

    };


    $("#quotesorshareline .add_new_line").on("click", addShareline);

    function addShareline() {
        var html = "",
            count = $("#quotesorshareline input").length-2;
            
        html +='<div class="form-group shareline cheetah">'
        html +='  <label for="caption">Share Line ' + count + '</label>'
        html +='  <input type="text" class="form-control shareline" name="shareline' + count + '" placeholder="Type/paste Share Line here!" style="width:90%" maxlength="150" required>'
        html +='</div>'
        $(".remove_shareline").show()
        $("#quotesorshareline .form-group:last").after(html);

        console.log("Adding line " + count);
    };

    $(".remove_shareline").on("click", removeShareline)
    
    function removeShareline() {
        var count = $("#quotesorshareline input").length-3;
        switch (count) {
            case 2:
                $(".remove_shareline").hide();
                $(".cheetah:last-child").remove();
                break;
            default:
                $(".cheetah:last-child").remove();
                break;
        }
        

        console.log("Removing line " + count)
     };

        // document.getElementById("share").innerHTML(html);



 });

    