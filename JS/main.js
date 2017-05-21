// My original JS styles will go here.

$(document).ready( function() {
  
  // Need to refresh browser at XS size for this to work.
  // At XS size...
function responsive() {
  // Recommend mobile app (game does not resize below 500)
  $("#flash-warning").html("<a href='#'>Mobile app</a> recommended at this size.");
  // Hide ad space at top 
  $("footer").html("<h4 style='text-align:center;padding-top:20px;padding-bottom:20px;'>Ad space</h4>");
  // Change text at bottom to accommodate ad space
  $("#ad-space").hide();
}
  // Run function at 500px
  var width = $(window).width();
  if (width < 500) {
    responsive();
  }
  
});  // ready