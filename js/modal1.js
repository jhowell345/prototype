$(document).ready(function() {
	$("#quotes1 .add_shortcode").on("click", addShortcode1);

   function addShortcode1() {

    // TODO - this is basic output from the form
    var shortcode = $("#quotes1 form").serialize();
    $("#comment").text(shortcode);
    console.log("adding shortcode for Quotes1: " + shortcode);

    // close the modal
    $("#quotes1 .close-me").click();
    console.log("closing modal")
    }

 });