// задание 1

let number = 10;

if (number % 2 === 0) {
    console.log("Число чётное");
} else {
    console.log("Число нечётное");
}

// задание 2 
let age = 23;
let discount = age < 18 ? 10 :
    age <= 65 ? 20 : 30;
console.log(`Скидка: ${discount}%`);

// switch-case
let age2 = 23;
let discount2;

switch (true) {
    case (age2 < 18):
        discount2 = 10;
        break;
    case (age2 >= 18 && age <= 65):
        discount2 = 20;
        break;
    case (age2 > 65):
        discount2 = 30;
        break;
    default:
        discount2 = 0;
}

console.log(`Скидка: ${discount}%`);

// задание 3 
let username = prompt("Введите имя пользователя:");
let password = prompt("Введите пароль:");

if ((username === "admin" || username === "user") && password === "123456") {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}

// задание 4
let weight = parseFloat(prompt("Введите вес посылки (в килограммах):"));
let deliveryType = prompt("Введите тип доставки (Стандарт, Экспресс, Премиум):");

if (isNaN(weight) || weight <= 0) {
    alert("Некорректный вес посылки");
} else if (weight <= 5) {
        baseCost = 10;
    } else {
        baseCost = 15;
    }; 

    let coefficient;

    switch (deliveryType) {
        case "Стандарт":
            coefficient = 1;
            break;
        case "Экспресс":
            coefficient = 1.5;
            break;
        case "Премиум":
            coefficient = 2;
            break;
        default:
            coefficient = 1;
    }

    let totalCost = baseCost * coefficient;

    alert(`Итоговая стоимость доставки: ${totalCost}$.\nВес: ${weight}кг\nТип доставки: ${deliveryType}\nБазовая стоимость: ${baseCost}$\nКоэффициент: ${coefficient}`);
