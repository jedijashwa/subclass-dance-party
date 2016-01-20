var ShowyDancer = function (top, left, timeBetweenSteps) {
  BadDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('showy-dancer');
  this.dancersIndex = window.dancers.length;
  console.log(window.dancers.length);
};

ShowyDancer.prototype = Object.create(BadDancer.prototype);
ShowyDancer.prototype.constructor = ShowyDancer;

ShowyDancer.prototype.step = function () {
  BadDancer.prototype.step.call(this);
  var showingOff = false;
  for (var i = 0; i < window.dancers.length; i++) {
    if (this.dancersIndex !== i) {
      if (this.distance(window.dancers[i].top, window.dancers[i].left) < 100) {
        showingOff = true;
        break;
      }
    }
  }
  if (showingOff) {
    this.$node.addClass('show-off');
  } else {
    this.$node.removeClass('show-off');
  }
};

ShowyDancer.prototype.showOff = function () {
  this.$node.addClass('show-off');
};
