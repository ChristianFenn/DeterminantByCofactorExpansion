import {determinant} from './det.js'

const args = process.argv.slice(2)
let matrix = []
try {
    matrix = JSON.parse(args[0])
} catch(e) {
    console.log("Invalid matrix input.\nInput should be in the form: \"[[1,2],[3,4]]\". See README.md for another example.")
    process.exit()
}

let rowCount = matrix.length;
let rowSizes = []
for (let i = 0; i < rowCount; i++) {
    rowSizes.push(matrix[i].length)
}
const dimensions = [rowCount, Math.min.apply(null, rowSizes)]

if (dimensions[0] != dimensions[1]) {
    console.log("Error: Matrix is not square.")
} else {
    console.log(`det(${JSON.stringify(matrix)}) = ${determinant(matrix)}`)
}
