//Arrays destructuring

let fruit = ['Apple' , 'Manzana'];
let [a,b] = fruit;
console.log(a,b);
console.log(a, fruit[1]);

// Object destructuring

let user = {username : 'Harol',
            age: 35};
let { username, age} = user;
console.log(username,age);
console.log(username, user.age);


// Spread operator

let person = { name: 'Steven', age: 28};
let country = 'CO';

let data = {...person, country};
console.log(data);

let data2 = {id:1, ...person, country}
console.log(data2);

//Exercise 
function solution(json1, json2) {
    // Tu código aquí 👈
    json1 =  json1 || { name: "Mr. Michi", food: "Pescado" };
    
    json2 = json2 || { age: 12, color: "Blanco" };
    console.log(json1,json2);
    return {...json1, ...json2}
}
solution({ name: "Bigotes", food: "Pollito"});




// Rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2,3,4,5);