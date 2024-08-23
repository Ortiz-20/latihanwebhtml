// script.js

// Deklarasikan variabel
let name = "John";
const age = 30;

// Mendapatkan elemen div dengan ID "output"
const outputDiv = document.getElementById('output');

// Tampilkan nama dan umur
outputDiv.innerHTML += `<p>Name: ${name}</p>`;
outputDiv.innerHTML += `<p>Age: ${age}</p>`;

// Buat array dan tampilkan semua buah
let fruits = ["Apple", "Banana", "Mango"];
outputDiv.innerHTML += "<p>Fruits:</p><ul>";
for (let i = 0; i < fruits.length; i++) {
    outputDiv.innerHTML += `<li>${fruits[i]}</li>`;
}
outputDiv.innerHTML += "</ul>";

// Buat objek dan tampilkan properti firstName dan lastName
let person = {firstName: "John", lastName: "Doe", age: 30};
outputDiv.innerHTML += `<p>Full Name: ${person.firstName} ${person.lastName}</p>`;

// Fungsi untuk memeriksa nilai input
function checkValue() {
    let userInput = document.getElementById('userInput').value;
    userInput = Number(userInput); // Mengubah nilai menjadi tipe number
    
    let message = "";
    if (userInput > 10) {
        message = "Nilai lebih besar dari 10";
    } else if (userInput === 10) {
        message = "Nilai sama dengan 10";
    } else if (userInput < 10) {
        message = "Nilai kurang dari 10";
    }
    
    outputDiv.innerHTML += `<p>${message}</p>`;
    outputDiv.innerHTML += "<p>Angka dari 1 hingga " + userInput + ":</p><ul>";
    for (let i = 1; i <= userInput; i++) {
        outputDiv.innerHTML += `<li>${i}</li>`;
    }
    outputDiv.innerHTML += "</ul>";
}

// Fungsi greet
function greet(name) {
    return `Hello, ${name}`;
}

// Panggil fungsi greet() dengan argumen berbeda dan tampilkan hasilnya
outputDiv.innerHTML += `<p>${greet("Alice")}</p>`;
outputDiv.innerHTML += `<p>${greet("Bob")}</p>`;

// Fungsi calculateSquare
function calculateSquare(number) {
    return number * number;
}

// Panggil fungsi calculateSquare() dengan beberapa angka dan tampilkan hasilnya
outputDiv.innerHTML += `<p>Square of 5: ${calculateSquare(5)}</p>`;
outputDiv.innerHTML += `<p>Square of 7: ${calculateSquare(7)}</p>`;

// Arrow function untuk menjumlahkan dua angka
const add = (a, b) => a + b;

// Panggil arrow function dan tampilkan hasilnya
outputDiv.innerHTML += `<p>Sum of 3 and 4: ${add(3, 4)}</p>`;
outputDiv.innerHTML += `<p>Sum of 10 and 15: ${add(10, 15)}</p>`;

// Array students
let students = ["Alice", "Bob", "Charlie"];

// Tambahkan satu nama lagi ke array
students.push("David");

// Tampilkan semua nama siswa
outputDiv.innerHTML += "<p>Students:</p><ul>";
students.forEach(student => {
    outputDiv.innerHTML += `<li>${student}</li>`;
});
outputDiv.innerHTML += "</ul>";

// Objek car
let car = {brand: "Toyota", model: "Corolla", year: 2020};

// Tampilkan semua properti dari objek car
outputDiv.innerHTML += "<p>Car Details:</p>";
for (let property in car) {
    outputDiv.innerHTML += `<p>${property}: ${car[property]}</p>`;
}

// Array objek mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Focus", year: 2018}
];

// Tampilkan informasi setiap mobil
outputDiv.innerHTML += "<p>Cars:</p>";
cars.forEach(car => {
    outputDiv.innerHTML += `<p>Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}</p>`;
});
