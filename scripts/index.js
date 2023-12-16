// первый способ создания объектов

let obj1 = new Object(); // создание объекта (ассоциативный массив) - первый способ

obj1.name = 'Rodion'; //поля массива
obj1.age = 18;
obj1.weight = 60; 
obj1['hair color'] = 'blonde'; //еще один способ задания полей, применяется когда в названии хотим 2 или более слов использовать 


let key = prompt('Введите ключ: ');
obj1[key] = [1, 2, 3];

console.log(obj1); // при выводе поля выводятся отсортированные в алфавитном порядке


//второй способ создания объектов - второй способ
let obj2 = {
    name: 'Robert',
    age: 25,
    'hair color': ' red',
    100: [10, 20, 30],
};

// удаление поля объекта

delete obj2[100];

console.log(obj2);


// перебор объектов через цикл
for(let i in obj2) {  //перебирает индексы объекта ( если точнее, ключи )
    console.log(i);
}

// for (let el of obj2) {  такой способ перебора объекта не работает
//     console.log(el);
// }

console.log(Object.keys(obj2)); //взяли тип данных Object и применили метод
console.log(Object.getOwnPropertyNames(obj2)); // в том числе отображаются наследованные поля

let field = prompt('Какое поле хотите удалить?');
if(field in obj2) {
    delete obj2[filed];
    alert('Поле удалено');
}
else {
    alert('Такое поле не обнаружено.');
}



let d1 = new Date();
console.log(d1);
console.log('День недели:' + d1.getDay()); //возвращает день недели ( воскресенье - нулевой день )
console.log('Число:' + d1.getDate()); //возвращает число
console.log('Месяц:' + d1.getMonth()); //возвращает месяц ( январь - 0 месяц, декабрь - 11)
console.log('Год:' + d1.getFullYear()); //возвращает год
console.log('Час:' + d1.getHours());
console.log('Час:' + d1.getUTCHours()); //без учета нашего часового пояса
console.log('МИнтуа:' + d1.getMinutes());
console.log('Секунда:' + d1.getSeconds());
console.log('МилиСекунда:' + d1.getMilliseconds());

console.log(new Date().getMilliseconds());// время в миллисекундах с 1 января 1970 года

console.log(new Date(Date.now() - new Date('2015-06-01')).getFullYear() - 1970); //если вычесть дату из даты то итог будет в милисекундах









//Задание: прямоугольник

let rect = {
    x1: 100,
    y1: 200,
    x2: 150,
    y2: 270,
    bgColor: 'blue'
};


//rectInfo(rect);
setSizes(rect, 100, 150);
//rectInfo(rect);

drawRect(rect, 'Hello');
rectInfo(rect);


function drawRect(obj, message) {
    document.write(`<div style="position: absolute; top: ${obj.y1}px; left: ${obj.x1}px;` +
    `width: ${obj.x2 - obj.x1}px; height:${obj.y2 - obj.y1}px;` +
    `background-color: ${obj.bgColor};` +
    `display:flex; justify-content: center; align-items: center;"`);
}


function setSizes (obj, width, height) {
    obj.x2 = obj.x1 + width;
    obj.y2 = obj.y1 + height;
}


function rectInfo (obj) {
    let width = Math.abs(obj.x1 - obj.x2);
    let height = Math.abs(obj.y1 - obj.y2);
    alert(
        `Координаты прямоугольника: (${obj.x1}); (${obj.y1}), (${obj.x2}); (${obj.y2})\n Размеры: ${width} x ${height}Площадь: ${width * height}` 
    );
    }

  