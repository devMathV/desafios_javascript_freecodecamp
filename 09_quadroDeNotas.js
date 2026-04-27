const getAverage = (arr) => {
    let average = 0

    for (let i in arr) {
        average += arr[i]
    }
    average /= arr.length

    return average
}

const getGrade = (average) => {
    if (average == 100) {
        return 'A+'
    } else if (average >= 90) {
        return 'A'
    } else if (average >= 80) {
        return 'B'
    } else if (average >= 70) {
        return 'C'
    } else if (average >= 60) {
        return 'D'
    } else if (average < 60) {
        return 'F'
    }
}

const hasPassingGrade = (score) => {
    let grade = getGrade(score) === 'F' ? false : true
    return grade
}

const studentMsg = (classScore, studentScore) => {
    let classAverage = getAverage(classScore)
    let studentGrade = getGrade(studentScore)
    let studentResult = hasPassingGrade(studentGrade) ? 'passed' : 'failed'

    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You ${studentResult} the course.`
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))