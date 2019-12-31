/*
    178 в)
    Дано натуральні числа n, a1,...,an. 
    Визначити кількість членів ak послідовності a1,...,an:
    в) що є квадратами парних чисел
*/

function getResultOld(...args) {
    let count = 0;

    for(let number of args) {
        if(!(Math.sqrt(number) % 2)) count++;
    }

    return count;
}

const getResultNew = (...args) => [...args].filter(number => !(Math.sqrt(number) % 2)).length;

module.exports = getResultNew;