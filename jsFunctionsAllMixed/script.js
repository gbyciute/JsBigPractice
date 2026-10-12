//PIRMAUZDUOTIS RETURN!!!!!!
function pazimiuVidurkis(a, b, c) {
    let vidurkis = (a + b + c) / 3;
    return vidurkis;
}

let rezultatas = pazimiuVidurkis(6, 7, 4);
console.log(rezultatas);


//2TASK SU 1 UZDUOTIM CONNECT!!!!!
function stipendija(rezultatas) {
    let pazimys = rezultatas;
    if (pazimys > 8) {
        return 'gaus stipendija'}
    else {
        return 'negaus stipendijos'
    };
}
let atsakymas = stipendija();
console.log(atsakymas);

//3task
function vardas(name) {
    return name;
}
let neimas = vardas('Gabe');

//4task

function pasisveikinimas(neimas, skaicius) {
    skaicius = skaicius + 1;
    console.log(`Labas ${neimas} tu prisijungei prie puslapio ${skaicius} karta`);
    return skaicius;
}

let galutinisVariantas = pasisveikinimas(neimas, 0);

console.log(galutinisVariantas);

galutinisVariantas = pasisveikinimas(neimas, galutinisVariantas);

console.log(galutinisVariantas);

galutinisVariantas = pasisveikinimas(neimas, galutinisVariantas);

console.log(galutinisVariantas);

