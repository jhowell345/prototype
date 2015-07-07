// validation
$('#instagram input.cobra').on('keyup', function () { 
    validateInput(this);
});


function validateInput(item) {

        var pattern = '',
            item_value = $(item).val(),
            type = $('.modal .dropdown-toggle').text();


        // switch(type) {
        // case('Quote'):
        //     pattern = /[\s\S]/;
        //     break;
        // case('Share Line'):
        //     pattern = /[\s\S]/;
        //     break;
        // }

        if (item_value.match(pattern) && item_value !== '' ) {

            $(item).parent('.cobra').removeClass('has-error');
            $(item).parent('.cobra').addClass('has-success');
        } else {

            $(item).parent('.cobra').addClass('has-error');
            $(item).parent('.cobra').removeClass('has-success');
        }
    }

$(document).ready(function() {

	$("#instagram .add_shortcode").on("click", addShortcode);
    $("#instagram .add_new_line").on("click", addLine);
    $("#instagram .remove").on("click",removeURL);
    $("#instagram .remove").hide()
    
    function addLine() {
        var html = "",
            count = $("#instagram input").length + 1;


        html +='<div class="form-group cobra has-error">'
        html +='  <label for="caption">Instagram URL ' + count + '</label>'
        html +='  <input type="text" class="form-control" name="shareline' + count + '" placeholder="Type/paste Instagram URL here!" style="width:90%" maxlength="150" required>'
        html +='</div>'

        // document.getElementById("share").innerHTML(html);
        $(".remove").show()
        $("#instagram .form-group:last").after(html);

        console.log("Adding line " + count);

    };

    function addShortcode() {

        // TODO - this is basic output from the form
        var shortcode = $("#instagram form").serialize();
        $("#comment").text(shortcode);
        console.log("adding shortcode for Instagram: " + shortcode);

        // close the modal
        $("#instagram .close-me").click();
        console.log("closing modal");
    };

    function removeURL() {
        $(".cobra:last-child").remove();
    };
});