/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 4
let myVariable2 = '5'



function compare1() {
    if (typeof myVariable1 !== 'number' || typeof myVariable2 !== 'number') {
        return 'One of variables is not a number'
    }

    if (Number(myVariable1) <= Number(myVariable2)) {
        return true
    }
    return `myVariable2 bigger than myVariable1`
}

console.log(compare1());
// Напишите код здесь

myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь

console.log(parseInt(true));
console.log(parseInt(false));