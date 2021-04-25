import {determinant, getCofactor} from '../det.js'
import * as chai from 'chai'

/**
 * A few simple tests to check that we're getting correct determinants.
 * Matrices in size from 2x2 to 7x7 are tested,
 * as well as some specific ones such as the identity matrix and a rotation matrix
 */
describe('Determinant Tests', () => {
    it('should compute correct determinants', function () {
        let matrix = [
            [2, 0, 0],
            [0, 4, 0],
            [0, 0, 5]
        ]
        chai.expect(determinant(matrix)).to.equal(40)

        // Test rotation matrix around the z-axis: should be 1 since the volume of the parallelepiped does not change after this transformation.
        matrix = [
            [Math.cos(toRadians(30)), -Math.sin(toRadians(30)), 0],
            [Math.sin(toRadians(30)), Math.cos(toRadians(30)), 0],
            [0, 0, 1]
        ]
        chai.expect(determinant(matrix)).to.equal(1)

        matrix = [
            [1, 2],
            [3, 4],
        ]
        chai.expect(determinant(matrix)).to.equal(-2)

        matrix = [
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
        ]
        chai.expect(determinant(matrix)).to.equal(1)

        matrix = [
            [3, 4, 5, 6],
            [2, 2, 1, 1],
            [2, 2, 2, 2],
            [2, 2, 2, 1]
        ]
        chai.expect(determinant(matrix)).to.equal(2)

        matrix = [
            [3, 4, 5, 6, 7],
            [2, 2, 1, 1, 8],
            [2, 2, 2, 2, 9],
            [2, 2, 2, 1, 10],
            [256, 227, 800, 1000, 100]
        ]
        chai.expect(determinant(matrix)).to.equal(-3227)

        matrix = [
            [0, 1, 1, 2, 3, 5, 8],
            [13, 21, 34, 55, 89, 144, 233],
            [377, 610, 987, 1597, 2584, 4181, 6765],
            [10946, 17711, 28657, 46368, 75025, 121393, 196418],
            [317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887],
            [9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141],
            [267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976],
        ]
        chai.expect(determinant(matrix)).to.equal(0)

        matrix = [
            [256, 0, 0, 0, 0],
            [0, 256, 0, 0, 0],
            [0, 0, 256, 0, 0],
            [0, 0, 0, 256, 0],
            [0, 0, 0, 0, 256]
        ]
        chai.expect(determinant(matrix)).to.equal(1099511627776)
    });
})

describe('Minor Tests', () => {
    it('should return correct cofactor matrices', () => {
        const matrix = [
            [Math.cos(toRadians(30)), -Math.sin(toRadians(30)), 0],
            [Math.sin(toRadians(30)), Math.cos(toRadians(30)), 0],
            [0, 0, 1]
        ]
        const cofactorMatrix = getCofactor(matrix, 2, 2)
        chai.expect(cofactorMatrix[0].length).to.be.equal(2)
        chai.expect(cofactorMatrix[1].length).to.be.equal(2)
    })
})

const toRadians = (thetaInDegrees) => {
    return (thetaInDegrees * Math.PI) / 180
}
