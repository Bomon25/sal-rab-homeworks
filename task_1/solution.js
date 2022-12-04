function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

   let messege; // создайте переменную message
   messege = productName; // присвойте переменной message значение переменной productName
   let messege = prodectName + ' ';добавьте в конец переменной message пробел
   let messege = prodectName + ' ' + 'за'; авьте в конец переменной message текст 'за'
   let messege = prodectName + ' ' + 'за' + ' '; обавьте в конец переменной message пробел
   let messege = prodectName + ' ' + 'за' + ' ' + productPrice; бавьте в конец переменной message значение переменной productPrice
   let messege = prodectName + ' ' + 'за' + ' ' + productPrice + ' ';/ добавьте в конец переменной message пробел
   let messege = prodectName + ' ' + 'за' + ' ' + productPrice + ' ' + 'теперь в корзине!'; бавьте в конец переменной message текст 'теперь в корзине!'
   return message // выведите переменную message в консоль

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

 let newValue; оздайте переменную newValue
 let newValue =  oldValue; войте ей значение oldValue
 let newValue =  newValue + 1; ьте значение newValue на 1

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

   let newSum;
   let newSum =  oldSum + difference;  // создайте переменную newSum и присвойте ей сумму oldSum и difference
   let newSumText;
   let newSumText =  newSum + ' ₽'; // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
   let newSumText =  newSum ₽; // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSumText;
}

