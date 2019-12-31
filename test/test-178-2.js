const assert = require('chai').assert;
const app = require('../178-2/index');

describe('Test for finding numbers that are multiple of 3 and not multiples of 5', function () {

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
        assert.strictEqual(result, 7, 'Result is not equal 7');
    });

    it('should get correct result of numbers [0...50]', function () {
        //arrange...
        const array = Array(50).fill().map((e, i) => i + 1);

        //act...
        const result = app(...array);

        //assert...
        assert.strictEqual(result, 13, 'Result is not equal 13');
    });

    it('should get correct result of numbers [0...100]', function () {
        //arrange...
        const array = Array(100).fill().map((e, i) => i + 1);

        //act...
        const result = app(...array);

        //assert...
        assert.strictEqual(result, 27, 'Result is not equal 25');
    });

});