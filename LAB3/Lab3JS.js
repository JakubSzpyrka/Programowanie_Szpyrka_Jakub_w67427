// alert("Hello World");

// let a=10;
// let b=20;
// let c=23.2;

//a
// alert(a+b+c);
//b
// console.log(a+b+c);
//c
//let wynik = a+b+c;
//document.getElementById("Zad3").innerHTML ="wynik dodawania to:" + wynik ;

//Zad 4
// let numberArray = [];
// for (let i=0; i <= 100; i+=2){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Zad5  
// let a = parseFloat(prompt("Podaj dlugosc boku1"));
// let b = parseFloat(prompt("Podaj dlugosc boku2"));
// let c = parseFloat(prompt("Podaj dlugosc boku3"));

// let p = (a+b+c)/2;
// let Pole =  Math.sqrt(p*(p-a)*(p-b)*(p-c));
// console.log(Pole)
//Zad 6

// let imie = prompt("Podaj imie")
// alert("Witaj"+ imie)

//Zadanie 7
// let w = parseInt(prompt("Podaj pierwszą liczbę"));
// let e = parseInt(prompt("Podaj drugą liczbe"));

// let wynik = w+e;
// alert("wynik dodawania to" + " " + wynik)

// zadanie 8
function findMax() {
    let nr1 = parseFloat(document.getElementById('liczba1').value);
    let nr2 = parseFloat(document.getElementById('liczba2').value);
    let nr3 = parseFloat(document.getElementById('liczba3').value);

    var max = Math.max(nr1, nr2, nr3);

    console.log(max);
    document.getElementById('wynik').innerText = 'Największa liczba: ' + max;
}