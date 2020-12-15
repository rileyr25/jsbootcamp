const gradeCalc = function (testScore, testTotal = 50) {
    const testPercent = testScore / testTotal * 100
    let letterGrade = ''
    if (testPercent >= 90) {
        letterGrade = 'A'
    } else if (testPercent >= 80) {
        letterGrade = 'B'
    } else if (testPercent >= 70) {
        letterGrade = 'C'
    } else if (testPercent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `Your Grade: ${letterGrade}, (${testPercent}%)`
}

const result = gradeCalc (36)

console.log(result)