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
  if (this.touched === 9) {
    this.top = randomNegative($(window).height() + 100);
    this.left = randomNegative($(window).width() + 100);
  } else {
    this.top += Math.random() * 300 - 150;
    this.left += Math.random() * 300 - 150;
  }
  this.$node.animate({top: this.top, left: this.left});
  speechBubble = new SpeechBubble(this.top, this.left+40, 100, 1, 1).$node;
  setTimeout(function () {
    $('body').append(speechBubble);
    //$('body').remove();
  }, 400);
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