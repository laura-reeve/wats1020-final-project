// My original JS styles will go here.

// Hide game load on load
$("#game-container").hide();

// Ready
$(document).ready(function() {
  
  // For logging Like/Dislike counts
  var voteCounts = {
    like: 0,
    dislike: 0,
    total: 0
  }
  
  // On "Click to Play Game" button, downnload and run game
  $("#game-button").click(function(){
    $("#game-container").show();
  });
  
  // Modal button - opens Review button modal
  $("#review-btn").click(function(){
    $("#review-modal").modal();
  });
  
  // Logging # of Likes
  $("#like").click(function(){
    voteCounts.like += 1;
    voteCounts.total += 1;
  $(".count-like").html(voteCounts.like);
    console.log(voteCounts);
  });
  
  // Logging # of Dislikes
  $("#dislike").click(function() {
    voteCounts.dislike += 1;
    voteCounts.total += 1;
  $(".count-dislike").html(voteCounts.dislike);
    console.log(voteCounts);
  });
  
  // Validate Review modal on Submit click (Username and Password required)
  $("review-form").validate();

  // Favorites button - alerts user of click and adds page to Favorites dropdown in nav menu
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