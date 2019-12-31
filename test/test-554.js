const assert = require('chai').assert;
const app = require('../554/index');

describe('Test for finding numbers that are squares of even numbers', function () {

    it('should get correct type of result [Array]', function () {
        //arrange...
        const limit = 10;

        //act...
        const result = app(limit);

        //assert...
        assert.isArray(result, 'Result is not array');
    });

    it('should get correct result of limit 15', function () {
        //arrange...
        const limit = 15;
        const expected = [[3, 4, 5], [5, 12, 13], [6, 8, 10]];

        //act...
        const result = app(limit);

        //assert...
        assert.deepEqual(result, expected, 'Result is not equal 3 current triplets');
    });

    it('should get correct result of limit 25', function () {
        //arrange...
        const limit = 25;
        const expected = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15], [12, 16, 20]];

        //act...
        const result = app(limit);

        //assert...
        assert.deepEqual(result, expected, 'Result is not equal 6 current triplets');
    });

    it('should get correct result of limit 50', function () {
        //arrange...
        const limit = 50;
        const expected = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [7, 24, 25], [8, 15, 17], [9, 12, 15], [9, 40, 41], [10, 24, 26], [12, 16, 20], [12, 35, 37], [15, 20, 25], [15, 36, 39], [16, 30, 34], [18, 24, 30], [20, 21, 29], [21, 28, 35], [24, 32, 40], [27, 36, 45]];

        //act...
        const result = app(limit);

        //assert...
        assert.deepEqual(result, expected, 'Result is not equal 3 current triplets');
    });

});