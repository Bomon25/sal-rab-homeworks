// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }
function sendRequest(name, phone, address, goods, sum) {
    
    let data = {goods: [], order: {}};

    name = ["Иван", "Василий Иванович"];
    street = ["ул. Ленина", "ул. Академика Королёва"];
    phone = ["+7(987)65-43-210", "+7(987)65-43-210"];
    house = ["дом 2","дом 12"];
    entrance = ["4 подъезд", "1 подъезд"];
    floor = ["5 этаж", "15 этаж"];
    flat = ["кв. 53", "кв. 253"];

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push ({title: goods[i].title , count: goods[i].count});
    }

    data.order.address = street + ", " + house + ", " + entrance +", " + floor + ", " +  flat;
    data.order.sum = sum;

    data.client = name + " " + phone;


    let jsonData = JSON.stringify({data: data});

    return jsonData;
}