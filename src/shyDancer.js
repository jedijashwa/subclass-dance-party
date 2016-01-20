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
  this.top += Math.random() * 300 - 150;
  this.left += Math.random() * 300 - 150;
  this.$node.animate({top: this.top, left: this.left});
};
