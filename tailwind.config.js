// let
// let name = "Mars";
// name = "Mercury";
// console.log(name);


// var
// var name ="Mars";
// name = "Saturn";
// var name = "Mercury";
// console.log(name);


// const

// const name = "Mercury";
// const age = 12;
// console.log(name);
// console.log("Your name")
// console.log(`Your name ${name}`);


// const name = prompt("Ismingizni kiriting");
// const surname = +prompt("Familiyangizni kiriting");
// const age = +prompt("Yoshingizni kiriting");
// const best = +prompt("Yoqtirgan faningizni yozing");
// const lokation = +prompt("Yashaydigon tumaningizni kiriting");
// const text = confirm("Malumotingizni kiritganingiz uchun tashakkur");
// console.log(`Ism: ${name} \nFamiliya: ${surname} \nYosh: ${age} \nYoqtirgan fan: ${best} \nYashash manzili: ${lokation}`);

// __________________________________________________________________________________________________________________________________________________-

// String
// let mars = "Utkir";
// console.log(mars);
// ""
// ''
// ``

// Number
// let mars =12;
// console.log(mars);

// Boolean
// let mars = "isteacher"
// console.log(mars);

// undefined
// let = "Mars"
// name = "Mars"

// null
// const mars =prompt("Enter your name")
// console.log(mars);

// Symbol

// BigInt

// Object
// let mars = {
//     name: "Utkir",
//     age: 13,
//     address: {
//         city: "Chirchik",
//         street: "Sharoff Rashidov"
//     }
// }
// console.log(mars.address.street);

// typeof

// let mars = "Mars";
// let age = 13;
// console.log(typeof mars);

// const text = prompt("Ismingizni kiriting kiriting");
// const number = prompt("Bironta harf kiriting");
// alert(`Siz kiritgan ${text} `);  

// ________________________________________________________________________________________________________________________________________________________

// let a = 10;
// let b = 3;
// console.log(a * b);
// console.log(a / b);
// console.log(a + b);
// console.log(a - b);
// console.log(a % b);
// console.log(a ** b);

// let num = 10;
// console.log(num % 2);

// let result = 10 + 5 * 2;
// console.log(result);

//let age = 20;
// age++;
// console.log(age);
// age--;
// console.log(age);

// let age = 100;
// age += 50;
// age -= 50;
// age *= 50;
// age /= 50;
// console.log(age);

// let num = Number("12");
// console.log(num);
// // NaN = Not a Number

// console.log(Math.round(4.5));
// let num = 9.5;
// console.log(Math.round(num));

// let num = 3.9;
// console.log(Math.floor(num));

// let num = 3.1;
// console.log(Math.ceil(num));

// let num = 4.9;
// console.log(Math.trunc(num));

// let num = Math.floor(Math.random() * 10);
// console.log(num);


// console.log(Math.max(10, 25, 2, 50));
// console.log(Math.min(10, 25, 2, 50));

// let num1 = Math.floor(Math.random() * 10);
// let num2 = Math.floor(Math.random() * 10);
// let num3 = Math.floor(Math.random() * 10);
// let num4 = Math.floor(Math.random() * 10);
// let num = Math.floor(Math.random() * 10);
// let num = [num1, num2, num3, num4 num]
// console.log(Math.max(num));

// console.log(Math.pow(2, 3));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));


// let name = "Mars IT school";
// console.log(name);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let text = " MarsIT ";
// console.log(text);
// console.log(text.trim());
// console.log(text.trimStart());
// console.log(text.trimEnd());



// let text = "I like javascript ";
// console.log(text.includes("javascript"));
// console.log(text.slice(8, 11));
// console.log(text.replace("javascript", "JS"));
// console.log(text.repeat(4));

//_______________________Object_____________________________________________________________________________________________________________________________________

// let mystudents = {
//     a: "Utkir",
//     b: "Odil",
//     c: "Sardor",
//     d: "Abdurashidov",
//     e: {
//         name: "Mars",
//         group: "Front",
//         score: 10
//     }
// }
// console.log(mystudents);
// mystudents.e.text = "Vinera";
// mystudents.e.group = "Frontend";
// delete mystudents.d;


// const book = new Object();
// book.title = "Gorye ot uma";
// book.author = "Griboyedov";
// book.year = 1869;
// console.log(book);

//Homework__________

// let name = prompt("Ismingizni kiriting:");
// let id = +prompt("Space ID kiriting:");
// let password = +prompt("Space Passwordingizni kiriting:");

// let user = {
//     name: name,
//     id: id,
//     password: password
// };

// console.log(user);

//___________________________________________________________________________________________________________________________________________________________________________________________________




// const age = +prompt("Yoshingizni kiriting")

// if (score >= 60){
//     console.log("Pensioner");
// }
// if (score >= 30){
//     console.log("Ishchi");
// }
// if (score >= 18){
//     console.log("Student");
// }
// if (score >= 10){
//     console.log("O'quvchi");
// }
// if (scre >= 9){
//     console.log("Yoshbola");
// }


// if (name === "Aziz" && age ==23);

// if (name === "Aziz" || age ==23);

// let name = "Aziz";
// if (!name){
//     console.log("Hello");
// }
// else{
//     console.log("Hay");
    
// }

// let isOnline = true;
// let status = isOnline ? "Online" : "Offline"
// console.log(status);

// let isOnline = false;
// let status = isOnline ? "Online" : "Offline"
// console.log(status);



let name = prompt("Ismingizni kiriting");
let letter = prompt("Bironta harf kiriting");

if (name && letter) {
  if (name.toLowerCase().includes(letter.toLowerCase())) {
    alert(`${name} ismining ichida ${letter} harfi mavjud`);
  } else {
    alert(`${name} ismining ichida ${letter} harfi mavjud emas`);
  }
}
















































