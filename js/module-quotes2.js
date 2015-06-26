$(document).ready(function() {

    $("#quotes2 .add_new_line").on("click", addQuotes2line);
    $("#quotes2 .add_shortcode").on("click", addShortcode);

    function addQuotes2line() {
        var html = "",
            count = $("#quotes2 input").length + 1;


        html +='<div class="form-group">'
        html +='  <label for="caption">Share Line ' + count + '</label>'
        html +='  <input type="text" class="form-control" name="shareline' + count + '" placeholder="Type/paste Share Line here!" style="width:90%" maxlength="150" required>'
        html +='</div>'

        // document.getElementById("share").innerHTML(html);

        $("#quotes2 .form-group:last").after(html);

        console.log("Adding new line");

    };

    function addShortcode() {
        console.log("adding shortcode for Quotes2")
    }
});