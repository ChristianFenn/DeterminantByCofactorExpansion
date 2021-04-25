
/**
 * @param matrix: an n*n matrix
 * @returns the determinant of the given n*n matrix
 */
const determinant = matrix => {
    let computedDeterminant = 0
    // base case: for a 2x2 matrix, A = [[a,b],[c,d]], compute the determinant: ad-bc
    if (matrix[0].length === 2 && matrix[1].length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    } else {
        for (let column = 0; column < matrix[0].length; column++) {
            computedDeterminant += Math.pow(-1, column) * matrix[0][column] * determinant(getCofactor(matrix, 0, column))
        }
        return computedDeterminant
    }
}

/**
 * @param matrix: an n*n 2D array
 * @param rowToExclude, starting at index 0, inclusive
 * @param columnToExclude, starting at index 0, inclusive
 * @returns an (n-1)*(n-1) cofactor matrix (with rowToExclude and columnToExclude removed).
 *
 * Example usage:    let matrix = [[1,2,3],
 *                                [4,5,6],
 *                                [7,8,9]]
 *
 *                   getCofactor(matrix, 1, 1)
 *
 *                   Should return a 2x2 matrix:
 *                   [[ 1, 3 ],
 *                    [ 7, 9 ]]
 */
const getCofactor = (matrix, rowToExclude, columnToExclude) => {
    let i = 0, j = 0
    const n = matrix[rowToExclude].length // The n*n matrix dimension
    const cofactor = Array.from(Array(n - 1), () => new Array(n - 1)) // size of each cofactor should be n-1*n-1
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (row !== rowToExclude && col !== columnToExclude) {
                cofactor[i][j] = matrix[row][col]
                if (++j === matrix[rowToExclude].length - 1) {
                    ++i
                    j = 0
                }
            }
        }
    }
    return cofactor
}

export {determinant, getCofactor}
