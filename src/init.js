var discoTimeouts = [];

$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    var linedUp = JSON.parse($(this).data("lined-up"));
    for (var i = 0; i < dancers.length; i++) {
      if(linedUp){
        dancers[i].resumeDance();
      } else {
        dancers[i].lineUp();
      }
    }
    
    if(linedUp){
      $(this).text("line up");
      $(this).data("lined-up", "false");
    } else {
      $(this).text("resume dancing");
      $(this).data("lined-up", "true");
    }
  });

  $('.tinyButton').on('click', function(event) {
    var tinified = JSON.parse($(this).data("tinified"));
    if(tinified){
      turnOffTiny();
    } else {
      $('.dancer').addClass('tiny');
      $('.tinyButton').removeClass('tiny');
      $(this).text("normal");
      $(this).data("tinified", "true");
      $('.tiny-div').html('<iframe width="100%" height="150%" src="https://www.youtube.com/embed/hoskDZRLOCs?controls=0&autoplay=1&disablekb=1" frameborder="0"></iframe>');
      turnOffDisco();
    }
  });
  
  $('.discoButton').on('click', function(event) {
    var disco = JSON.parse($(this).data("disco"));
    // for (var i = 0; i < dancers.length; i++) {
    //   if(linedUp){
    //     dancers[i].resumeDance();
    //   } else {
    //     dancers[i].lineUp();
    //   }
    // }
    
    if(disco){
      turnOffDisco();
    } else {
      $(this).data("disco", "true");
      turnOffTiny();
      $('.disco-light').css({'background-color': 'rgba(0, 0, 0, 0.8)', 'z-index': 100});
      discoFlashing();
      $('.disco-ball').animate({top: $('.topbar').css('height')}, 'slow');    
    }
  });
});

var turnOffTiny = function () {
  $('.tinyButton').text("tiny dancer");
  $('.tinyButton').data("tinified", "false");
  $('.dancer').removeClass('tiny');
  $('.tinyButton').addClass('tiny');
  $('.tiny-div').html('');
}

var turnOffDisco = function () {
  $('.discoButton').data("disco", "false");
  for (var i = 0; i < discoTimeouts.length; i++) {
    clearTimeout(discoTimeouts[i]);
  }
  $('.disco-ball').animate({top: -200}, 'slow');
  $('.disco-light').css({'background-color': 'rgba(0, 0, 0, 0)', 'z-index': 0});
}

var discoFlashing = function () {
  discoTimeouts.push(setTimeout( function () {
    $('.disco-light').css({'background-color': 'rgba(0, 0, 0, 0)'});
    discoTimeouts.push(setTimeout( function () {
      $('.disco-light').css({'background-color': 'rgba(0, 0, 0, 0.8)'});
      discoFlashing();
    }, 100));
  }, 100));
}
