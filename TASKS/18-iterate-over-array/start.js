/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const arr = ['Alex', 'Vlad', 'Natali', 'Dima']

const map = arr.map(item => {
    console.log(item)
})
const forEach = arr.forEach(item => {
    console.log(item)
})

