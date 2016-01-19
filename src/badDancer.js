var BadDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);


};

BadDancer.prototype = Object.create(Dancer.prototype);
BadDancer.prototype.constructor = BadDancer;

BadDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.top += Math.random() * 200 - 100;
  this.left += Math.random() * 200 - 100;

  this.$node.animate({top: this.top, left: this.left});
}





