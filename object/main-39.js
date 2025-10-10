// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
    name: "Сергей",
    age: 23,
    country: "Россия",
    activities: "Футбол"
};

console.log(`Имя: ${person.name}`);
console.log(`Возраст: ${person.age}`);
console.log(`Страна: ${person.country}`);
console.log(`Увлечения: ${person.activities}`);


// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
function isEmpty(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
console.log(isEmpty({})); 
console.log(isEmpty({ key: 3})); 


// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
// Создаем объект task
const task = {
    title: "Изучить JavaScript",
    description: "Изучить объекты",
    isCompleted: false,
};

function cloneAndModify(object, modifications) {
    return {
        ...object,      
        ...modifications 
    };
}
const modifications = {
    isCompleted: true,
    description: "Изучить объекты и функции",
};

const modifiedTask = cloneAndModify(task, modifications);

console.log("Исходный объект:");
for (let property in task) {
    console.log(`${property}: ${task[property]}`);
}


console.log("\nСвойства измененного объекта:");
for (let property in modifiedTask) {
    console.log(`${property}: ${modifiedTask[property]}`);
}



// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
function callAllMethods(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            if (value instanceof Function) {
                value.call(obj);
            }
        }
    }
}

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

callAllMethods(myObject);