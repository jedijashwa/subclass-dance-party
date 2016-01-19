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

    it("should move to the right when step is called once", function(){
      sinon.spy(squareDancer, "step");
      expect(squareDancer.step.callCount).to.be.equal(0);
      var oldLeft = squareDancer.left;
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);
      var newLeft = squareDancer.left;
      expect(newLeft).to.equal(oldLeft + 25);
    });


  });
});
