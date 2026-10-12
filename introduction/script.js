const firstName = 'Gabe';
const city = 'Kaunas'

console.log('Mano vardas ' + firstName + ' ,' + 'mano miestas yra ' + city);


console.log(`Mano vardas yra ${firstName} ir mano miestas yra ${city}`);



let str = "Labas pasauli";

// 1. charAt(PASIRENKTA RAIDE DUOS)
console.log(str.charAt(2)); 
// "b"

// 2. concat(SUJUNGIA DU)
console.log("Labas ".concat("pasauli"));
// "Labas pasauli"

// 3. endsWith(PATIKRINA TRUE/FALSE AR YRA STR TO KO IESKOM)
console.log(str.endsWith("pasauli"));
// true

// 4. indexOf(PARODO KURIAME INDEKSE YRA TAI KO IESKOM)
console.log(str.indexOf("p"));
// 6

// 5. lastIndexOf(KADA PASKUTINI KARTA KURIAME INDEKSE RANDAME TAI KO NORIJM)
console.log("banana".lastIndexOf("a"));
// 5

// 6. length
console.log(str.length);
// 13

// 7. match(!!!!!!!!!!!!)
console.log("Labas 123".match(/\d+/));
// ["123"]

// 8. repeat(PAKARTOJA STRINGA TIEK, KIEK KARTU PRASOME)
console.log("Labas ".repeat(3));
// "Labas Labas Labas "

// 9. replace()
console.log("Labas Jonai".replace("Jonai", "Petrai"));
// "Labas Petrai"

// 10. search(PARODO KURIAME INDEKSE PRASIDEDA TAI KO IESKOM)
console.log("Labas pasauli".search("pasauli"));
// 6

// 11. slice(ISKERPA NUO NURODYTO INDEKSO IKI KITO NURODYTO INDEKSO)
console.log("JavaScript".slice(0, 4));
// "Java"

// 12. split()
console.log("obuolys,bananas".split(","));
// ["obuolys", "bananas"]

// 13. startsWith(PATIKRINA AR PRASIDEDA SU NURODYTU STR)
console.log("JavaScript".startsWith("Java"));
// true

// 14. substring(GRAZINA TIK PASIRINKTA DALI NUO INDEKSO IKI INDEKSO)
console.log("JavaScript".substring(0, 4));
// "Java"

// 15. toLowerCase()
console.log("LABAS".toLowerCase());
// "labas"

// 16. toString()
console.log((123).toString());
// "123"

// 17. toUpperCase()
console.log("labas".toUpperCase());
// "LABAS"

// 18. trim(ISTRINA TUSCIAS VIETAS)
console.log("   Labas   ".trim());
// "Labas"

PIRMA

let car = "Opel";
car = 'Audi'
console.log(car);


//ANTRA

let number = 1;
console.log(number);
console.log(++number);
console.log(++number);


//TRECIA

let value = 18;
console.log(--value);
console.log(--value);
console.log(--value);    


//KETVIRTA
//1BUDAS
let object = '8';
let objects = +object;
console.log(objects)
console.log(typeof objects)

//2BUDAS

let numberis = "25";
let numberiai = parseInt(numberis);

console.log(numberiai);
console.log(typeof numberiai);


//3BUDAS

let skaicius = '10'
let skaiciai = skaicius * 1;
console.log(skaiciai)
console.log(typeof skaiciai)

//5UZDUOTIS

let apple = 10;
let orange = 22 - apple;
console.log(orange);

//KMI FORMULE
let petroSvoris = 66;
let petroUgis = 154;

let jonoSvoris = 88;
let jonoUgis = 201;

let petroKmi = petroSvoris / (petroUgis * petroUgis);
let jonoKmi = jonoSvoris / (jonoUgis * jonoUgis);

let palyginimas = petroKmi >= jonoKmi;
console.log('Palyginimas parode, kad Petro KMI yra didesnis uz Jono KMI');


//PITAGORO UZDUOTIS

let a = 8;
let b = 9;
let c = (a**2 + b**2);
console.log(c)

//CELCIJUS FARENHEITAS

let celcijus = 32;
let farenheitas = (celcijus * 1.8) + 32;
console.log(typeof farenheitas);
console.log(farenheitas);

//trecios pratybos!!!

let firstNumber = 55;
let secondNumber = 24;
console.log(firstNumber + secondNumber, firstNumber - secondNumber, firstNumber / secondNumber, firstNumber * secondNumber, firstNumber % secondNumber);
 //pratybos jonas sakinys
let name = 'Jonas';
let age = 77;
let cityAntras = 'Kaunas';
console.log(`Jo vardas yra ${name}, jam yra ${age} metai ir jis yra is ${cityAntras}`);

//pricfe ir discount

let price = 49;
let discount = 20;
let newPrice = price - (price * discount / 100);
console.log(newPrice);

//4 uzduotis raudonos pratybos

let numberTrecias = 10.47;
let rounded = Math.round(numberTrecias);

let aukstyn = Math.ceil(numberTrecias);
let zemyn = Math.floor(numberTrecias);
let saknis = Math.sqrt(numberTrecias);

console.log(rounded, aukstyn, zemyn, saknis);


//5 uzduotis

let sakinys = 'sendien mokomes javascript';
console.log(sakinys.length);
console.log(sakinys.toUpperCase());
console.log(sakinys.toLowerCase());

//6 UZDUOTIS RED

let sentence = 'Sendien mokomes JavaScript pradzios';
console.log(sentence.indexOf('JavaScript'));

let naujas = sakinys.replace('javascript', 'Programming');
console.log(naujas);

//7 UZDUOTIS

let firstNamee = 'Gabriele';
let lastNamee = 'Byciute';
let connected = firstNamee.concat(lastNamee);
console.log(connected);
console.log(connected.length);
console.log(connected[0]);

console.log(firstNamee.search('a')); //!!!!!!
console.log(lastNamee.search('a'));


//8 uzduotis LAST

let firstNumberis = 8;
let secondNumberis = 22;
let thirdNumberis = 45;

console.log(Math.max(firstNumberis, secondNumberis, thirdNumberis));
console.log(Math.min(firstNumberis, secondNumberis, thirdNumberis));
console.log((firstNumberis + secondNumberis + thirdNumberis) / 3);





