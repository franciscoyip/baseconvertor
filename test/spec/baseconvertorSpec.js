(function () {
  'use strict';

  describe('Base Convertor Test', function () {

    describe('Test on zero in decimal base', function () {

      it('should be zero when convert to binary', function () {
        expect(baseConvertor(0, 2)).to.equal(0);
      });

      it('should be zero when convert to quad', function () {
        expect(baseConvertor(0, 4)).to.equal(0);
      });

    });

    describe('Test on 1 in decimal base', function () {

      it('should be 1 when convert to binary', function () {
        expect(baseConvertor(1, 2)).to.equal('1');
      });

      it('should be 1 when convert to quad', function () {
        expect(baseConvertor(1, 4)).to.equal('1');
      });

    });

    describe('Test on 2 in decimal base', function () {

      it('should be 10 when convert to binary', function () {
        expect(baseConvertor(2, 2)).to.equal('10');
      });

      it('should be 2 when convert to quad', function () {
        expect(baseConvertor(2, 4)).to.equal('2');
      });

    });

    describe('Test on larger number 10325 from decimal base', function(){
      var number = 10325;
      it('should be 10100001010101 when convert to binary', function () {
        expect(baseConvertor(number, 2)).to.equal('10100001010101');
      });

    });

  });
})();
