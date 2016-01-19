describe("squareDancer", function() {

  var squareDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squareDancer = new SquareDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(squareDancer, "step");
      expect(squareDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
    });

    it("should move in a square when step is called", function(){
      sinon.spy(squareDancer, "step");
      expect(squareDancer.step.callCount).to.be.equal(0);
      var originalLeft = squareDancer.left;
      var originalTop = squareDancer.top;
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);
      var newLeft = squareDancer.left;
      expect(newLeft).to.equal(originalLeft + 25);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
      var newTop = squareDancer.top;
      expect(newTop).to.equal(originalTop + 25);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(3);
      newLeft = squareDancer.left;
      expect(newLeft).to.equal(originalLeft);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(4);
      newTop = squareDancer.top;
      expect(newTop).to.equal(originalTop);
    });
  });
});
