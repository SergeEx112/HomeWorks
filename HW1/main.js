//1
let num = 25; //number
let name = 'Serhii'; //string
let isMale = true; //boolean
let age = null; //null
let surname; //undefined

//2
let nissanAltima = {
    brand: 'Nissan',
    model: 'Altima',
    year: 2015,
    engineCapacity: 2.5,
    isAutoTransmission: true,
    isNew: false,
    mileage: null,
    fuel: null,
    color: 'gray',
   	price: 268911,
};

let bmwX5 = {
	brand: 'BMW',
    model: 'X5',
    year: 2019,
    engineCapacity: 3,
    isAutoTransmission: true,
    isNew: true,
    mileage: null,
    fuel: null,
    color: 'white',
   	price: 2497550,
}

let fiatTipo = {
	brand: 'Fiat',
    model: 'Tipo',
    year: 2018,
    engineCapacity: 1.4,
    isAutoTransmission: true,
    isNew: false,
    mileage: null,
    fuel: null,
    color: 'blue',
   	price: 308000,
}

let peugeot = {
	brand: 'Peugeot',
    model: '208',
    year: 2019,
    engineCapacity: 1.5,
    isAutoTransmission: true,
    isNew: false,
    mileage: null,
    fuel: null,
    color: 'orange',
   	price: 341000,
}

let LexusEs = {
	brand: 'Lexus',
    model: 'ES',
    year: 2019,
    engineCapacity: 2.5,
    isAutoTransmission: true,
    isNew: true,
    mileage: null,
    fuel: null,
    color: 'black',
   	price: 1199929,
}

//3
let getVehicleAttributes = () => {
    console.log(nissanAltima);
};
getVehicleAttributes();

//4
nissanAltima.getAttributes = function() {
	nissanAltima.manufacture = 'New'
    console.log(nissanAltima);
};
nissanAltima.getAttributes();

//5
const arr = [
   nissanAltima, bmwX5, fiatTipo, peugeot, LexusEs
];

const getCarByIndex = (index) => {
    console.log(arr[index])
};
getCarByIndex(4);
