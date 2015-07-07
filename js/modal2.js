$(document).ready(function() {

	$("#instagram .add_shortcode").on("click", insertShortcode);
    $("#instagram .add_new_line").on("click", addLine);
    $("#instagram .remove_url").on("click",removeURL);
    $("#instagram .remove_url").hide()
    
// validation
    $('#instagram').on('keyup blur', 'input.url', function () { 
        validateInput(this);
    });


    function validateInput(item) {
        console.log($(item).val());
        var pattern = 'https://instagram.com/',
            item_value = $(item).val(),
            type = $('.modal .dropdown-toggle').text();

        if (item_value.match(pattern)) {

            $(item).parent('.form-group').removeClass('has-error');
            $(item).parent('.form-group').addClass('has-success');
        } else {

            $(item).parent('.form-group').addClass('has-error');
            $(item).parent('.form-group').removeClass('has-success');
        }
    }

    function addLine() {
        var html = "",
            count = $("#instagram input").length;


        html +='<div class="form-group cobra">'
        html +='  <label for="caption">Instagram URL ' + count + '</label>'
        html +='  <input type="text" class="form-control url" name="URL' + count + '" placeholder="Type/paste Instagram URL here!" style="width:90%" maxlength="150" required>'
        html +='</div>'

        // document.getElementById("share").innerHTML(html);
        $(".remove_url").show()
        $("#instagram .form-group:last").after(html);
        $("#columncount").text(count);

        console.log("Adding line " + count);

    };

    function insertShortcode() {

        // TODO - this is basic output from the form
        var shortcode = $("#instagram form").serialize();
        if ($(".form-group").hasClass("has-success")) {
            $("#comment").text(shortcode);
            console.log("adding shortcode for Instagram: " + shortcode);

            // close the modal
            $("#instagram .close-me").click();
            console.log("closing modal");            
        }
        else {
            alert(" Instagram URL must start with https://instagram.com/.")
        }
        

    };

    function removeURL() {
        var count = $("#instagram input").length - 1;
        switch (count) {
            case 2:
                $(".remove_url").hide();
                $(".cobra:last-child").remove();
                $("#columncount").text(count);
                break;
            default:
                $(".cobra:last-child").remove();
                $("#columncount").text(count);
                break;
        }

        console.log("Removing line " + count)
    };
});