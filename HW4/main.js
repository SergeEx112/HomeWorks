function Employee({ id, name, surname, salary, workExperience, isPrivileges, gender }) {
    this.id = id || null;
    this.name = name || 'No name';
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
}

const employee_a = new Employee({
    id: 11,
    name: 'Alina',
    surname: 'Akil',
    salary: 1000,
    workExperience: 10,
    isPrivileges: true,
    gender: 'famale',
});

console.log(employee_a);

// Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки
// 2

console.log('-------------------------2------------------------------');

Employee.prototype.getFullName = function () {
    return this.surname + " " + this.name;
}

console.log(employee_a.getFullName());

// Создать новый массив employeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя employeeConstructArr.
// 3

console.log('-------------------------3------------------------------');

let createEmployesFromArr = (arr) => {
    let myArr = [];
    arr.forEach(function (item) {
        myArr.push(item);
    });
    console.log(myArr);
    return myArr;
};

const employeeConstructArr = createEmployesFromArr(employeeArr);

// Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в employeeConstructArr;
// 4

console.log('-------------------------4------------------------------');

const getFullNamesFromArr = (arr) => {
    let myArrNames = [];
    arr.forEach(function (item) {
        // myArrNames.push(item.name + " " + item.surname);
        myArrNames.push(item.name + " " + item.surname);
    });
    console.log(myArrNames);
}

getFullNamesFromArr(employeeConstructArr);