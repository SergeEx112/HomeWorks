/////1
const sayHi = (t) => {
    let name = prompt('Введите имя');
    if (t >= 6 && t < 12) {
        console.log(name + ' Доброе утро');
    } else if (t >= 12 && t < 18) {
        console.log(name + ' Добрый день');
    } else if (t >= 18 && t < 24) {
        console.log(name + ' Добрый вечер');
    } else if (t >= 00 || t == 24 && t < 6) {
        console.log(name + ' Доброй ночи');
    }
    else {
        console.log(name + ' Введите корректное число');
    }
}

sayHi(1);


/////2 
let correctEmail = 'Qwerty@gmail.com'
let correctPassword = 'Qwe123'


let checkIsUserValid = (email, password) => {
    if (correctEmail == 'Qwerty@gmail.com' && correctPassword == 'Qwe123') {
        console.log('Доступ разрешен');
    }
    else {
        console.log('Доступ запрещен');
    }
}

checkIsUserValid('Qwerty@gmail.com', 'Qwe123');

//////3

let checkEvenOrOdd = (number) => {
    if (number % 2 === 0) {
        console.log('Number' + " " + number + " " + 'is Even');
    } else {
        console.log('Number' + " " + number + " " + 'is Odd');
    }
};
checkEvenOrOdd(6);
checkEvenOrOdd(15);




