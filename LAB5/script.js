// Zadanie 1
 
let liczby = [];
for (let i=0; i < 10; i++) {
    let liczba = prompt("Wpisz liczbę całkowitą: ");
    liczby.push(parseInt(liczba));
}
 
console.log("Wprowadzone liczby:", liczby);
 
let szukanaLiczba = parseInt(prompt("Podaj liczbę całkowitą do znalezienia:"));
let licznik = liczby.filter(x => x === szukanaLiczba).length;
console.log(`Liczba ${szukanaLiczba} występuje ${licznik} razy w tablicy.`);
 
// Zadanie 2
 
let number = [1, 2, 3, 4, 5, 6];
let indeks = parseInt(prompt("Podaj indeks, gdzie wstawić liczbę (0-5):"));
let nowaLiczba = parseInt(prompt("Podaj nową liczbę do wstawienia:"));
number.splice(indeks, 0, nowaLiczba);
console.log("Zaktualizowana tablica:", number);
 
// Zadanie 3
 
let ciag = prompt("Wpisz ciąg znaków do odwrócenia:");
let odwroconyCiąg = ciag.split('').reverse().join('');
console.log("Odwrocony ciąg:", odwroconyCiąg);
 
// Zadanie 5
 
let numbers = [10, 20, 30, 40, 50];
console.log("Suma:", numbers.reduce((a, b) => a + b, 0));
console.log("Parzyste numbers:", numbers.filter(x => x % 2 === 0));
console.log("Pomnożone wartości:", numbers.map(x => x * 3));
numbers.push(69851);
console.log("Index numeru albumu:", numbers.indexOf(69851));
console.log("Średnia arytmetyczna:", numbers.reduce((a, b) => a + b, 0) / numbers.length);
console.log("Największa liczba:", Math.max(...numbers));
console.log("Ilość wystąpień wartości 20:", numbers.filter(x => x === 20).length);
 
// Zadanie 6
 
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  console.log(generateFibonacci(100));
 
// Zadanie 7
 
function sumOfTwoLargest(numbers) {
    let sorted = numbers.sort((a, b) => b - a);
    return sorted[0] + sorted[1];
  }
  let number1 = [10, 20, 30, 40, 50];
  console.log("Suma dwóch największych liczb:", sumOfTwoLargest(number1));
 
// Zadanie 8
 
function removeDuplicates(array) {
    return [...new Set(array)];
  }
  let number2 = [1, 2, 2, 3, 4, 5, 5, 6];
  console.log("Tablica bez duplikatów:", removeDuplicates(number2));
 
// Zadanie 9
 
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let liczba = 17;
  console.log(liczba + " jest liczbą pierwszą?", isPrime(liczba));