$(document).ready(function() {

    var text_max = 250;
    $(".countdowncountdown").text(text_max + " characters remaining.");

    $(".countdowntext").keyup(function() {
        var text_length = $(".countdowntext").val().length;
        var text_remaining = text_max - text_length;

        $(".countdowncountdown").text(text_remaining + " characters remaining");      
        if (text_remaining<=10) {
            $("#chasm").css("color","red");
        }
        if (text_remaining>10) {
            $("#chasm").css("color","grey");
        }
    });

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