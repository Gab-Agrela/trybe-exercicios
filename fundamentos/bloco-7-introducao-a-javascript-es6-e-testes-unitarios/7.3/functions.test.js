const {sum, 
    myRemove, 
    myFizzBuzz,
} = require('./functions.js');


describe('Testa soma', () => {
    it ('A função retorna 9', () => {
        expect(9).toBe(sum(4,5));
    });
    it ('A função retorna 0', () => {
        expect(0).toBe(sum(0,0));
    })
    it('Retorna Erro', () => {
        expect(() => sum(4,'5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
});

describe('MyRemove', () => {
    it('Testes', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

describe('MyFizzBuzz', () => {
    it('Testes', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('2')).toBe(false);
    })
})