function generateList(array) {
    const list = document.createElement('ul');
    array.forEach((item) => {
        const listItem = document.createElement('li');
        if (Array.isArray(item)) {
            listItem.appendChild(generateList(item));
        } else {
            // Інакше просто додаємо текстовий вміст до елементу списку
            const text = document.createTextNode(item);
            listItem.appendChild(text);
        }
        list.appendChild(listItem);
    });
    return list;
}
const myArray = [1, 2, [1.1, 1.2, 1.3], 3];
const myList = generateList(myArray);
document.body.appendChild(myList);


