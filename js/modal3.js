$(document).ready(function() {

	$("#instagram .add_shortcode").on("click", addShortcode);
    $("#instagram .add_new_line").on("click", addLine);
    
    function addLine() {
        var html = "",
            count = $("#instagram input").length + 1;


        html +='<div class="form-group">'
        html +='  <label for="caption">Instagram URL ' + count + '</label>'
        html +='  <input type="text" class="form-control" name="shareline' + count + '" placeholder="Type/paste Instagram URL here!" style="width:90%" maxlength="150" required>'
        html +='</div>'

        // document.getElementById("share").innerHTML(html);

        $("#instagram .form-group:last").after(html);

        console.log("Adding new line");

    };

    function addShortcode() {

        // TODO - this is basic output from the form
        var shortcode = $("#instagram form").serialize();
        $("#comment").text(shortcode);
        console.log("adding shortcode for Instagram: " + shortcode);

        // close the modal
        $("#instagram .close-me").click();
        console.log("closing modal")
    }


});