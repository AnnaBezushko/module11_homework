const getPercent = require('../getPercent');

describe('regular tests', () => {
    it('multiplies 30 * 200/100 to equal 60', () => {
        expect(getPercent(30, 200)).toBe(60);
    }),
        it('multiplies 40 * 200/100 to equal 60 (expect_fail)', () => {
            expect(getPercent(40, 200)).toBe(60);
        })
    it('multiplies 100 * 200/100 to equal 200', () => {
        expect(getPercent(100, 200)).toBe(200);
    })
});

describe('corner tests', () => {
    it('multiplies 30 * 0/100 to equal 0 (corner)', () => {
        expect(getPercent(30, 0)).toBe(0);
}),
it('multiplies 0 * 200/100 to equal 60 (corner)', () => {
    expect(getPercent(0, 200)).toBe(0);
})

});

describe('unit tests',()=>{
    it('negative percent test', ()=>{
        expect(getPercent(-1, 200)).toBe('данные неверны')
    }),
    it('more than 100 test', ()=>{
        expect(getPercent(1000, 200)).toBe('данные неверны')
    }),
    it('more than 100 one more test', ()=>{
        expect(getPercent(101, 200)).toBe('данные неверны')
    })
})