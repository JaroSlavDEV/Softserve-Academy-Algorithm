const assert = require('chai').assert;
const app = require('../554/index');

describe('Test for finding numbers that are squares of even numbers', function () {

    it('should get error when there is NaN as the limit [Parameter]', function () {
        //arrange...
        const limit = 'Not a number';

        //act...
        const result = () => app(limit);

        //assert...
        assert.throws(result, Error, 'Parameter limit isn\'t natural number.');
    });

    it('should get error when there is float as the limit [Parameter]', function () {
        //arrange...
        const limit = 1.5;

        //act...
        const result = () => app(limit);

        //assert...
        assert.throws(result, 'Parameter limit isn\'t natural number.');
    });

    it('should get error when there is negative number as the limit [Parameter]', function () {
        //arrange...
        const limit = -1;

        //act...
        const result = () => app(limit);

        //assert...
        assert.throws(result, 'Parameter limit isn\'t natural number.');
    });

    it('should get correct type of result [Array]', function () {
        //arrange...
        const limit = 10;

        //act...
        const result = app(limit);

        //assert...
        assert.isArray(result, 'Result is not array');
    });

    it('should get correct type of element in outer array [Array]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let e of result) {
            assert.isArray(e, 'Element in outer array is not array');
        }
    });

    it('should get correct type of element in inner array [Number]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let array of result) {
            for(let e of array) {
                assert.isNumber(e, 'Element in inner array is not number');
            }
        }
    });

    it('should get correct type of element in inner array [Integer]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let array of result) {
            for(let e of array) {
                assert.isTrue(Math.trunc(e) === e, 'Element in inner array is not integer');
            }
        }
    });

    it('should get correct type of element in inner array [Positive number]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let array of result) {
            for(let e of array) {
                assert.isTrue(e > -1, 'Element in inner array is not positive number');
            }
        }
    });

    it('should get correct length of elements in inner array [Positive number]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let array of result) {
            const length = array.length;
            assert.strictEqual(length, 3, 'Length of elements in inner array is not 3');
        }
    });

    it('should get correct result of comparison elements in inner array [a and b]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let array of result) {
            assert.isTrue(array[0] <= array[1], 'Element [a] in inner array larger than element [b] in inner array');
        }
    });

    it('should get correct result of comparison elements in inner array [b and c]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let array of result) {
            assert.isTrue(array[1] <= array[2], 'Element [b] in inner array larger than element [c] in inner array');
        }
    });

    it('should get correct result of comparison element in inner array and limit [c and limit]', function () {
        //arrange...
        const limit = 50;

        //act...
        const result = app(limit);

        //assert...
        for(let array of result) {
            assert.isTrue(array[2] <= limit, 'Element [c] in inner array larger than element [limit]');
        }
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