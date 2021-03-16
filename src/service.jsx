export const randomNumber = (number) => {
    return Math.round(Math.floor(Math.random() * number + 1))
}

export const mastermind = (attempt, solution) => {
    let exact = 0
    let wrongPlace = 0
    let numberOfAppearances = {}
    solution.forEach((element, index) => {
        if (element === attempt[index]) {
            exact++
        }
        else {
            if (Object.keys(numberOfAppearances).some(key => Number(key) === Number(element))) {
                numberOfAppearances[element] = numberOfAppearances[element] + 1
            }
            else {
                numberOfAppearances[element] = 1
            }
        }
    })
    for (let [index, element] of attempt.entries()) {
        if (Number(element) === Number(solution[index])) {
            continue
        }
        else if (Object.keys(numberOfAppearances).some(key => Number(key) === Number(element))) {
            wrongPlace++
            if (numberOfAppearances[element] === 1) {
                delete numberOfAppearances[element]
            }
            else {
                numberOfAppearances[element] = numberOfAppearances[element] - 1
            }
        }
    }
    return { 'exact': exact, 'wrongPlace': wrongPlace }
}