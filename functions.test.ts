const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    test('expect to be arrays', () => {
        expect(shuffleArray.length).toEqual(1)
    })
    test('expect to be truthy', () => {
        expect(shuffleArray).toBeTruthy
})
})