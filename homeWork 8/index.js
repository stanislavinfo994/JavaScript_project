//1) Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

//2) Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function calculateAverage(array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}

const mixedArray = [1, 'two', 3, 'four', 5];
const average = calculateAverage(mixedArray);
console.log(average);

//3) Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function removeCharacters(str, charsToRemove) {
    for (let i = 0; i < charsToRemove.length; i++) {
        const regex = new RegExp(charsToRemove[i], 'g');
        str = str.replace(regex, '');
    }

    return str;
}
const str = ' hello world';
const result = removeCharacters(str, ['l', 'd']);
console.log(result);
