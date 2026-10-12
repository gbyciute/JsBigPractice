neimas = prompt('whats your name?')
alert(`Hello, i know your name is ${neimas}, hope Kobrinski is doing well `);

function challange() {
    numbers = Number(prompt('Choose number between 1 and 3......'))
    if (numbers === 1) {
        alert('Your task is 20 minutes grabbing')
    }
    else if (numbers === 2) {
        alert('Your task is to buy 10 more Kobrinski')
    }
    else if (numbers === 3) {
        alert('Your task is kiss Pega 10 times')
    }
    else {
        alert('Wrong number!!!')
    }
}
console.log(challange())


function lunch() {
    food = String(prompt('What do you want for dinner tomorrow?.....'))
    alert(`${food} is a very good choice!`)
}
console.log(lunch())

function love() {
    lv = Number(prompt('Would you love me if i would look like Kobrinski? 1 = YES, 2 = NO'));
    if (lv === 1) {
        alert('Perfect choice of your answer!!!')
    }
    if (lv === 2) {
        alert('Wrong answer :(')
    }
    else {
        alert('I said only 1 or 2 ^.^')
    }
}
console.log(love)
