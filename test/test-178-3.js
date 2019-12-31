const assert = require('chai').assert;
const app = require('../178-3/index');

describe('Test for finding numbers that are squares of even numbers', function () {

    it('should get correct type of result [Number]', function () {
        //arrange...
        const array = Array(10).fill().map((e, i) => i + 1);

        //act...
        const result = app(...array);

        //assert...
        assert.isNumber(result, 'Result is not number');
    });

    it('should get correct result of numbers [0...25]', function () {
        //arrange...
        const array = Array(25).fill().map((e, i) => i + 1);

        //act...
        const result = app(...array);

        //assert...
        assert.strictEqual(result, 2, 'Result is not equal 2');
    });

    it('should get correct result of numbers [0...50]', function () {
        //arrange...
        const array = Array(50).fill().map((e, i) => i + 1);

        //act...
        const result = app(...array);

        //assert...
        assert.strictEqual(result, 3, 'Result is not equal 3');
    });

    it('should get correct result of numbers [0...100]', function () {
        //arrange...
        const array = Array(100).fill().map((e, i) => i + 1);

        //act...
        const result = app(...array);

        //assert...
        assert.strictEqual(result, 5, 'Result is not equal 5');
    });

});