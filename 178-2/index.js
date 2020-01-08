/*
    178 б)
    Дано натуральні числа n, a1,...,an. 
    Визначити кількість членів ak послідовності a1,...,an:
    б) кратних 3 і не кратних 5
*/

function getResultOld(...args) {
    let count = 0;

    for(let number of args) {
        if(!Number.isInteger(number) || (number < 0)) throw new Error('Some numbers in the sequence aren\'t natural.');
        if(!(number % 3) && (number % 5)) count++;
    }

    return count;
}

const getResultNew = (...args) => [...args].filter(number => !(number % 3) && (number % 5)).length;

try {
    const result = getResultOld(0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48);
    console.log(result);

} catch (error) {
    console.log(error);
}

module.exports = getResultOld;