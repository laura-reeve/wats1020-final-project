// My original JS styles will go here.

$(document).ready( function() {
  
  // Modal button - opens Review button modal
  $("#review-btn").click(function(){
    $("#review-modal").modal();
  });
  
  // I want to validate the form for required username and password - I saw something about using "excluded"?
/*  $("#review-form").validate({
    submitHandler: function(form) {
      showErrors();
      form.submit();
    },
    rules: {
      "inputUserName": {
        required: true   
      },
      "inputPassword": {
        required: true
      }
    }
  }); 
  
  I would also like to record the votes for the Star Rating using localStorage and get an average rating that will populate on load.
  
  */
  
  // Favorites button - alerts user of click and adds page to Favorites dropdown in nav menu
  // I want to see if I can populate the URL and text using jQuery...?
  $("#favorites-btn").click(function() {
    alert("Added to Favorites!");
    $("#replace-li").html("<a href='#'>Flip Diving</a>");
  });
   
  // Need to refresh browser at XS size for this to work!  Changes at mobile size:
  // At XS size...
function responsive() {
  // Recommend mobile app (game does not resize below 500)
  $("#flash-warning").html("<a href='https://itunes.apple.com/us/app/flip-diving/id1045516045?mt=8' target='_blank'>Mobile app</a> recommended at this size.");
  // Change text in Footer to accommodate ad space
  $("footer").html("<h4 style='text-align:center;padding-top:20px;padding-bottom:20px;'>Ad space</h4>");
  // Hide ad space at top
  $("#ad-space").hide();
}
  // Run function at 500px
  var width = $(window).width();
  if (width < 500) {
    responsive();
  }  
  
});  // ready