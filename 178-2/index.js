/*
    178 б)
    Дано натуральні числа n, a1,...,an. 
    Визначити кількість членів ak послідовності a1,...,an:
    б) кратних 3 і не кратних 5
*/

function getResultOld(...args) {
    let count = 0;

    for(let number of args) {
        if(!(number % 3) && (number % 5)) count++;
    }

    return count;
}

const getResultNew = (...args) => [...args].filter(number => !(number % 3) && (number % 5)).length;

module.exports = getResultNew;