//ASMENINIS DIENOS ASISTENTAS MINI PROGRAMA

function greeting() {
    let now = new Date();
    let hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        console.log('Good morning!');
    }
    else if (hour >= 12 && hour < 18) {
        alert('Good afternoon!');
    }
    else if (hour >= 18 && hour < 22) {
        alert('Good evening!');
    }
    else {
        alert('Good night!');
    }
}
greeting();

function energyRating() {
    let energy = Number(prompt('input your energy level 1 -10'));

    if (energy < 4) {
        return 'Go to rest!';
    }
    else if (energy > 4 && energy <= 7) {
        return 'Do simple tasks!';
    }
    else if (energy > 7 && energy <= 10) {
        return 'You can do difficult tasks!';
    }
}
energyRating()

function timePlanner() {
    let minutesHave = Number(prompt('How many minutes you have?'));
    let minuteNeeded = Number(prompt('How many minutes you need?'));

    if (minutesHave >= minuteNeeded) {
        alert('You are ok, you have time');
    }
    else {
        alert('You do not have time');
    }
}
console.log(timePlanner())

function goalsCalculator() {
    let amountWant = Number(prompt('Tell us how much you want to save:.....'));
    let currentAmount = Number(prompt('How much do you have rn?.....'));
    let savingReccomendation = amountWant - currentAmount;

    if (savingReccomendation > 0) {
        alert(`You still need ${currentAmount - amountWant} eur.`);
    }
    else {
        alert('Congratulations! You reached your savings goal!');
    }
}
console.log(goalsCalculator())



function challange() {
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
        alert('Your task is 0 minutes of reading!');
    }
    else if (randomNumber === 2) {
        alert('Your task is 50 minutes of writing code!');
    }
    else if (randomNumber === 3) {
        alert('Your task is 20 minutes of HTML!');
    }
}
console.log(challange())

function endDayResult() {
    let tasksDone = Number(prompt('How many tasks you did?.....'));
    let tasksPlanned = Number(prompt('How many tasks you had?....'));
    let tasksResult = (tasksDone * 100) / tasksPlanned;
    alert(`You did ${tasksResult}% of your tasks today!!!`);
}
console.log(endDayResult())