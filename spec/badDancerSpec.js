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

  it("should have a step function that makes its node blink", function() {
    sinon.spy(badDancer.$node, 'toggle');
    badDancer.step();
    expect(badDancer.$node.toggle.called).to.be.true;
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
  });
});
