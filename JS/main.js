// My original JS styles will go here.

$(document).ready( function() {
  
    // resize flash player according to viewport height/width
  $(window).on('resize orientationChange', function(event) {
    var width = $(window).width();
    var height = $(window).height();
    $.resize(width);
    $(".miniclip-game-embed").resize(width, height);
  });
  
});  // ready