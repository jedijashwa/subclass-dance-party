var ShyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('shy-dancer');
  this.$node.mouseover(this.run.bind(this));
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.run = function () {
  this.top += Math.random() * 300 - 150;
  this.left += Math.random() * 300 - 150;

  this.$node.animate({top: this.top, left: this.left});
};
