
const chai = require('chai');
const expect = require('chai').expect;
const calculations = require('../app/calculations');

chai.should();

describe ( 'Boolean test', () => {
    it('value should be true', function () {
        expect(true).to.equal(true)
    });
});

describe ('This is a small boolean test for a false boolean', () =>  {
    it('should be false', function () {
        expect(false).to.equal(false)
    });
});

describe('Add two numbers', () => {
    it('Equals 4', () => {
        const total = calculations.add(2, 2);
        total.should.equal(4);
    });
    it('Equals -4', () => {
        const total = calculations.add(-8, 4);
        total.should.equal(-4);
    });
});

describe('Substract two numbers', () => {
    it('Equals 5', () => {
        const total = calculations.substract(7, 2);
        total.should.equal(5);
    });
    it('Equals 0', () => {
        const total = calculations.substract(0, 0);
        total.should.equal(0);
    });
});

describe('Divide two numbers', () => {
    it('Equals 5', () => {
        const total = calculations.divide(40, 8);
        total.should.equal(5);
    });
    it('Equals 0', () => {
        const total = calculations.divide(10, 0);
        total.should.not.equal(0);
    });
});

describe('Multiply two numbers', () => {
    it('Equals 0', () => {
        const total = calculations.multiply(17, 0);
        total.should.equal(0);
    });
    it('Equals 100', () => {
        const total = calculations.multiply(10, 10);
        total.should.equal(100);
    });
});
