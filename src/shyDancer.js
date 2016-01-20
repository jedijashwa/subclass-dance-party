var ShyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('shy-dancer');
  this.$node.mouseover(this.run.bind(this));
  this.touched = 0;
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.run = function () {
  this.touched++;  
  if (this.touched < 6) {
    this.top += Math.random() * 300 - 150;
    this.left += Math.random() * 300 - 150;
    this.$node.animate({top: this.top, left: this.left});
    if (this.touched === 2){
      var $speechBubble = new SpeechBubble(this.top, this.left+40, 100, 1, 1).$node;
      setTimeout(function () {
        $('body').append($speechBubble);
        $speechBubble.fadeIn("fast").delay(500).fadeOut("fast");
      }, 400);
    } else if (this.touched === 4) {
      var $speechBubble = new SpeechBubble(this.top, this.left-60, 100, 1, 2).$node;
      setTimeout(function () {
        $('body').append($speechBubble);
        $speechBubble.fadeIn("fast").delay(500).fadeOut("fast");
      }, 400);
    }
  } 
  
  else if (this.touched === 6) {
    var $speechBubble = new SpeechBubble(this.top, this.left+40, 100, 1, 3).$node;
    setTimeout(function () {
      $('body').append($speechBubble);
      $speechBubble.fadeIn("fast").delay(500).fadeOut("fast");
    }, 400);
    this.top = randomNegative($(window).height() + 100);
    this.left = randomNegative($(window).width() + 100);
    context = this;
    setTimeout(function () {
      context.$node.animate({top: context.top, left: context.left});
    }, 1000);
  }
};

ShyDancer.prototype.lineUp = function () {
  if (this.touched < 9) {
    Dancer.prototype.lineUp.call(this);
  }
}

// function return value as value or inverse of value randomly
// if no value given, returns 1 or -1.
var randomNegative = function (value) {
  value = value || 1;
  if (Math.random() < .5) {
    return value;
  } else {
    return value * -1;
  }
}