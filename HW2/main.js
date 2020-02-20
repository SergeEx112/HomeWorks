/////1
const sayHi = (time) => {
    let name = prompt('Введите имя');
    if (time >= 6 && time < 12) {
        console.log(name + ' Доброе утро');
    } else if (time >= 12 && time < 18) {
        console.log(name + ' Добрый день');
    } else if (time >= 18 && time < 24) {
        console.log(name + ' Добрый вечер');
    } else if (time >= 00 || time == 24 && time < 6) {
        console.log(name + ' Доброй ночи');
    }
    else {
        console.log(name + ' Введите корректное число');
    }
}

sayHi(6);
sayHi(12);
sayHi(18);
sayHi(00);


/////2 
const Email = 'Qwerty@gmail.com'
const Password = 'Qwe123'



const checkIsUserValid = (email, password) => {
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




