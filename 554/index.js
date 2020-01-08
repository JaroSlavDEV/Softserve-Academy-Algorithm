/*
    554
    Дано натуральне число n. 
    Отримати всі піфагорові трійки натуральних чисел, 
    кожне з яких не перевищує n, тобто всі такі трійки натуральних чисел a, b, c,
    що a^2 + b^2 = c^2 (a <= b <= c <= n).
*/

function getResultOld(limit) {
    let result = [];
    if(!Number.isInteger(limit) || (limit < 0)) throw new Error('Parameter limit isn\'t natural number.');

    for(let a = 1; a < limit; a++) {
        for(let b = a; b < limit; b++) {
            for(let c = b; c < limit; c++) {
                if((a**2 + b**2) === c**2) result.push([a, b, c]);
            }
        }
    }

    return result;
}

function getResultNew(limit) {
    let result = [];
    if(!Number.isInteger(limit) || (limit < 0)) throw new Error('Parameter limit isn\'t natural number.');

    for(let a = 1; a < limit; a++) {
        for(let b = a; b < limit; b++) {
            c = Math.sqrt(a**2 + b**2);
            if(c >= limit) break;
            if(c % 1 === 0) result.push([a, b, c]);
        }
    }

    return result;
}

try {
    const result = getResultNew(50);
    console.log(result);

} catch (error) {
    console.log(error);
}

module.exports = getResultNew;