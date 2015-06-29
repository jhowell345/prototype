$(document).ready(function() {
	$("#countdown .add_shortcode").on("click", addCountShortcode);

   function addCountShortcode() {

    // TODO - this is basic output from the form
    var countshortcode = $("#countdown form").serialize();
    $("#comment").text(countshortcode);
    console.log("adding shortcode for Countdown: " + $("#countdown form"));

    // close the modal
    $("#countdown .close-me").click();
    console.log("closing modal")
    }

 });