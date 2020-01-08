/*
    178 в)
    Дано натуральні числа n, a1,...,an. 
    Визначити кількість членів ak послідовності a1,...,an:
    в) що є квадратами парних чисел
*/

function getResultOld(...args) {
    let count = 0;

    for(let number of args) {
        if(!Number.isInteger(number) || (number < 0)) throw new Error('Some numbers in the sequence aren\'t natural.');
        if(!(Math.sqrt(number) % 2)) count++;
    }

    return count;
}

const getResultNew = (...args) => [...args].filter(number => !(Math.sqrt(number) % 2)).length;

try {
    const result = getResultOld(0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100);
    console.log(result);

} catch (error) {
    console.log(error);
}

module.exports = getResultOld;