$(document).ready(function() {
	$("#countdown .add_shortcode").on("click", addCountShortcode);
    
   function addCountShortcode() {

    // TODO - this is basic output from the form
    var shortcode = $("#countdown form").serialize();
    $("#comment").text(shortcode);
    console.log("adding shortcode for Countdown: " + shortcode);

    // close the modal
    $("#countdown .close-me").click();
    console.log("closing modal")
    }

 });