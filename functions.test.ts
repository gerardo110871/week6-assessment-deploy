const {shuffleArray} = require('./utils')

const dummyArr = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    test('should return an array of the same length', () => {
        let returnedArray = shuffleArray(dummyArr)
        expect(returnedArray.length).toEqual(dummyArr.length)
    })
    test('expect to be truthy', () => {
        expect(shuffleArray.length).toBeTruthy
})
})