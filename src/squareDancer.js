var SquareDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('square-dancer');
  this.lastMove = "down";

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  if(this.lastMove === "down"){
    this.left += 25;
    this.lastMove = "right";
  } else if (this.lastMove === "right"){
    this.top += 25;
    this.lastMove = "up";
  } else if (this.lastMove === "up"){
    this.left -= 25;
    this.lastMove = "left";
  } else {
    this.top -= 25;
    this.lastMove = "down";
  }

  this.$node.animate({top: this.top, left: this.left});
};




