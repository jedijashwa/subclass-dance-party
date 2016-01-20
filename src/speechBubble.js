var SpeechBubble = function (top, left, timeBetweenSteps, beforeAfter, image) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('speech-bubble');
  this.$node.html('<img src="src/img/speech' + image + '.png">');
}

SpeechBubble.prototype = Object.create(Dancer.prototype);
SpeechBubble.prototype.constructor = SpeechBubble;
