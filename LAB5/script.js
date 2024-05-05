// let tablica = []

// for (let i=0; i<10;i++){
//     tablica[i]=parseFloat(prompt("Podaj liczby"));
// }
// alert(tablica)

// let liczba = parseFloat(prompt("podaj liczbe do wyszukania")) 
// for(let x=0; x<10; x++){
//     if (tablica[x] == liczba){
//         console.log(liczba)
//     }else{
//         console.log("nie ma takiej loczby")
//     }
// }

//Zadanie 2

// let tablica = [1,2,3,4,5,6]
// console.log(tablica)
// let liczba = prompt("podaj liczbe na zamiane");
// let gdzie = prompt("gdzie ja wstawic")

// let dlugosc = tablica.length;
// for(let i; i<dlugosc;i++){
//     tablica.splice(gdzie, 0, liczba)
//     console.log(tablica)
// }


// zadanie 3

let tab = []
for (let i=0; i<6; i++){
    tab[i] = parseFloat(prompt("podaj liczby do ciagu"));
}


// zadanie 4


//zadanie 5
// Tablica liczb
// let liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let suma = liczby.reduce((acc, curr) => acc + curr, 0);
// console.log("suma:", suma);


// let parzyste = liczby.filter(num => num % 2 === 0);
// console.log("parzyste", parzyste);


// let mnozenie = liczby.map(element => element * 3);
// console.log("mnozenie:", mnozenie);


// let numerAlbumu = prompt("podaj nr albumu"); 
// liczby.push(numerAlbumu);
// let indexAlbumu = liczby.indexOf(numerAlbumu);
// console.log("ndex numeru albumu:", indexAlbumu);


// let srednia = suma / liczby.length;
// console.log("srednia arytmetyczna:", srednia);


// let max = Math.max(...liczby);
// console.log("największa liczba:", max);


// let wartosc = prompt("podaj wartosc"); 
// let ile = liczby.filter(num => num === wartosc).length;
// console.log("wystapienia", wartosc + ":", ile);

//zadanie 6


// function fibonaci(n) {
//     let fibb = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibb[i] = fibb[i - 1] + fibb[i - 2];
//     }
//     return fibb;
// }

// let ciag = fibonaci(100);
// console.log(ciag);

//zadanie 7