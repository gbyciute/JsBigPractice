//Funkcija, kuri priima skaiciu ir istraukia jo sakni. jei ats nera sveikas skaicius, pasalinti skaicius po kablelio ir grazinti tik sveika.ats

function saknis(skaicius) {
    let rez = Math.sqrt(skaicius); //istraukem sakni
    rez = Math.floor(rez); //nuima skaicius po kablelio
    return rez;
}
console.log(saknis(60))

// Metinis atlyginimas skaiciuokloe chat


function YearlySalary(salary) {
    let salaryTwo = salary * 12;
    salaryTwo = Math.floor(salaryTwo)
    return salaryTwo
}

console.log(YearlySalary(1200));
console.log(YearlySalary(1450.50));
console.log(YearlySalary(999.99));

//Prekes kaina po nuolai8dos CHAT 

function discount(price, discount) {
    let realPrice = (price * discount) / 100;
    let finalPrice = price - realPrice;
    return finalPrice
}

console.log(discount(100, 10))

// random number


function randomNumber() {
    let skaicius = Math.floor(Math.random() * 41) + 5; //floor panaikina skaic po kablelio.
    return skaicius;
}

console.log(randomNumber());

//function priima tris skaicius ir grazina didziausia

function biggestNumber(num1, num2, num3) {
    let maxNumber = Math.max(num1, num2, num3)
    return maxNumber;
}
console.log(biggestNumber(8, 100, 99))

//programa , kuri patikrina ar islaike egzamina jei 5 arba daugiau tada islaike, jei maziau nei 5 tada ne.

function examResult(score) {
    if (score >= 5) {
        console.log('Exam is passed.')
    }
    else {
        console.log('Exam is not passed.')
    }
}
examResult(8) //!!!! nekvieciama funkcija, nes nera return

//factorial HARD
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(4)); 



//Atspek skaiciu nuo 1 iki 10

function guessNumber(guess) {
    let number = Math.floor(Math.random() * 10) + 1;
    if (guess === number) {
        return 'Atspejote';
    }
    else {
        return 'neatspejote';
    }
}
console.log(guessNumber(5));

//funkcija loterija 
function lottery() {
   let number = Math.floor(Math.random() * 10) + 1;
    if (number === 7) {
        console.log('You won the prize!')
    }
    else if (number === 5 || number === 9) {
        console.log('You wont the small prize!')
    }
    else if (number === 10){
        console.log('JACKPOT!!!!!!')
    }
    else {
        console.log('You did not win anything!')
    }
}
lottery();


///check person age

function TheirAge(age) {
    if (age < 0) {
        console.log('Invalid age!')
    }
    else if (age < 18) {
        console.log('You are underage')
    }
}


// 07Financial situation

function financialSituation(incomes, expenses) {
    let missingAmount = expenses - incomes;
    let moreMoney = incomes - expenses;
    let totalSavings = (incomes - expenses) * 12;
    if (incomes < 0 || expenses < 0) {
        console.log('It cant be negative!!!')
    }
    else if (expenses > incomes) {
        console.log(`You are missing ${missingAmount} $`);
    }
    else if (incomes === expenses) {
        console.log('Your budget is balanced');
    }
    else if (incomes > expenses) {
        console.log(`You have ${moreMoney} $ more`);

        if (moreMoney >= incomes * 0.20) {
            console.log('You can save some money!');
        }
    }
    console.log(`In one year you saved ${totalSavings} $`);
}

financialSituation(500, 400);


//8 grades rating

function gradesComments(grade) {

    if (grade < 1 || grade > 10) {
    return 'Wrong grade!';
    }
    else if (grade <= 3) {
        return 'You need more practice!';
    }
    else if (grade > 3 && grade <= 5) {
        return 'Not enough!';
    }
    else if (grade > 5 && grade <= 8 ) {
        return 'Good result!';
    }
    else if (grade > 8 && grade <= 10) {
        return 'Perfect!';
    }
}
console.log(gradesComments(8))

function finalGrade() {
    let testGrade = Number(prompt('write yout test grade:'))
    let exam = Number(prompt('Write your exam grade:'))
    
    if (exam < 4) {
        return 'exam cannot be negative!';
    }
    if ((testGrade < 1 || testGrade > 10) && (exam < 1 || exam > 10)) {
        return 'Wrong grade!';
    }
    
    let finalResult = ((testGrade * 40) / 100) + ((exam * 60) / 100);
    return finalResult;
}
console.log(finalGrade())


//assistent of the day HARD



