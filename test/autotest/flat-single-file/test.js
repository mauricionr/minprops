var Adder = require('.');
var expect = require('chai').expect;

describe('adder', () => {
    it('should add some numbers', () => {
        var adder = new Adder();
        adder.add(1);
        adder.add(2);
        adder.add(3);
        expect(adder.getSum()).to.equal(6);
    });
    it('should be able to access a private property from the same package', () => {
        var adder = new Adder();
        adder.add(1);
        adder.add(2);
        adder.add(3);
        expect(adder.$__sum).to.equal(6);
    });
});