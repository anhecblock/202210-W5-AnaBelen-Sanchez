import { arrayLength, arrayPush, arrayPop } from './arrayMethods.js';

describe('Given arrayLength function', () => {
    const arrData = [3, 4, 5, 6];
    describe('When parameters are an array', () => {
        test(`Then result should be the array length ${arrData.length}`, () => {
            const result = arrayLength(arrData);
            const expectedResult = arrData.length;
            expect(result).toBe(expectedResult);
        });
    });
});

describe('Given arrayPush function', () => {
    const arrData = [3, 4, 5, 6];
    describe('When the push method is replicated', () => {
        test('Then result should be add one element to the end of array', () => {
            const expectedResult = [3, 4, 5, 6, 7];
            arrayPush(arrData, 7);
            expect(arrData).toStrictEqual(expectedResult);
        });
    });
});

describe('Given arrayPop function', () => {
    const arrData = [3, 4, 5, 6];
    describe('When the pop method is replicated', () => {
        test('Then result should be removes the las element from array', () => {
            const expectedResult = 6;
            const result = arrayPop(arrData);
            expect(result).toBe(expectedResult);
        });
    });
});
