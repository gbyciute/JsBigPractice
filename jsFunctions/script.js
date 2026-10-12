function labas(name) {
    console.log('hello ' + name);
}
labas('Gabe');
labas('Nuno');


//2 TASK FUNCTIONS

let vardas = 'Nunito';
let amzius = 42;

function prabegoMetai() {
    amzius = amzius +1;
    console.log(vardas + ' ' + amzius);
}
prabegoMetai();
prabegoMetai();
prabegoMetai();
prabegoMetai();

//3UZDUOTIS   CONNECTED WITH 4

function numberinis(num1, num2, num3) {
    let numeris = Math.min(num1, num2, num3);
    console.log(numeris);
    return numeris;
}
numberinis(88, 55, 44);
let result = numberinis(22, 44, 33);


//4uzduotis CONNECTED WITH 3

function artimetinisVidurkis(numb1, numb2, numb3) {
    let numb = numberinis(3, 3, 1);
    console.log(numb);
    console.log((numb1 + numb2 + numb3) / 3);
}
artimetinisVidurkis(5, 9, 1);
artimetinisVidurkis(result, 2, 3);



console.log('--------------------')


function skaiciuokle(numeric) {
    let verte = numeric + 1;
    return verte;
}

let resultas = skaiciuokle(100);
console.log(resultas);
