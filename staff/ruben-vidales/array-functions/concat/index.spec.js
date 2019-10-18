describe('concat', function () {
    it('should concat both arrays in other one', function () {
        var ar1 = [1, 2, 3, 4, 5];
        var ar2 = [6, 7, 8, 9, 10];
        var result = concat(ar1, ar2);
        expect(result.length).toBe(10);
        expect(result[0]).toBe(1);
        expect(result[result.length - 1]).toBe(10);
    });

    it('should concat more than two arrays in one', function () {
        var ar1 = [1, 2, 3, 4, 5];
        var ar2 = [6, 7, 8, 9, 10];
        var ar3 = [11, 12, 13, 14, 15];
        var result = concat(ar1, ar2, ar3);
        expect(result.length).toBe(15);
        expect(result[0]).toBe(1);
        expect(result[result.length - 1]).toBe(15);
    });

    it('should return a new array with the values of the first if the others are empty', function () {
        var ar1 = [1, 2, 3, 4, 5];
        var ar2 = [];
        var ar3 = [];
        var result = concat(ar1, ar2, ar3);
        expect(result.length).toBe(5);
        expect(result).toEqual(new Array(1,2,3,4,5));
    });

    it('should return a new array with the values of the first if the others are not defined', function () {
        var ar1 = [1, 2, 3, 4, 5];
        var ar2 //= [6, 7, 8, 9, 10];
        var ar3 //= [11, 12, 13, 14, 15];
        var result = concat(ar1, ar2, ar3);
        expect(result.length).toBe(5);
        expect(result).toEqual(new Array(1,2,3,4,5));
    });

    it('should fail on undefined array', function () {
        var ar1 //= [1, 2, 3];
        var ar2 = [6, 7, 8, 9, 10];

        expect(function () { concat(ar1 ,ar2); }).toThrowError(TypeError, 'undefined is not an array');
    });
});