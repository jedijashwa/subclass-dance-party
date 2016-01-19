describe("badDancer", function() {

  var badDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    badDancer = new BadDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(badDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(badDancer, "step");
      expect(badDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(badDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(badDancer.step.callCount).to.be.equal(2);
    });
    it("should dance to a different location", function(){
      sinon.spy(badDancer, "step");
      expect(badDancer.step.callCount).to.be.equal(0);
      var originalLeft = badDancer.left;
      var originalTop = badDancer.top;
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(badDancer.step.callCount).to.be.equal(1);
      var newLeft = badDancer.left;
      var newTop = badDancer.top;
      expect(newLeft).to.not.equal(originalLeft);
      expect(newTop).to.not.equal(originalTop);
    });
  });
});
