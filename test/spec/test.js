(function () {
  'use strict';

  describe('Stack Tests', function () {



    describe('Test on zero elements', function () {
      var mystack = null;
      mystack = new Stack();

      it('should be empty', function () {
        expect(mystack.isEmpty()).to.equal(true);
      });
      it('the length is zero', function(){
        expect(mystack.length()).to.equal(0);
      });
      it('pop should not return any item', function(){
        expect(mystack.pop()).to.equal(undefined);
      })
    });

    describe('Test on one element', function(){
      var mystack = null;
      mystack = new Stack();

      var obj = new Object();
      mystack.push(obj);

      it('should not be empty', function(){
        expect(mystack.isEmpty()).to.equal(false);
      });

      it('should be count 1', function(){
        expect(mystack.length()).to.equal(1);
      });

      it('should peek what we pushed', function(){
        expect(mystack.peek()).to.equal(obj);
      });

    });





  });
})();
