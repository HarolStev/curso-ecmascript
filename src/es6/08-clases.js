//this

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}
const valen = new user('Valen');
console.log(valen.greeting());

//setters and getters 

class User{
    //constructor
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new User('Carolina',28);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);



//comentarios en Platzi
class Person {
    constructor() {
        this.name = 'Zajith';
        this.age = 27;
    }

    getInfo() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old`);
    }
}



  class Student extends Person { // <-
}
const person = new Person();
const student1 = new Student();

person.getInfo(); // My name is Zajith. I'm 27 years old
student1.getInfo(); // My name is Zajith. I'm 27 years old

/*Para que una clase hija herede las propiedades de su padre, se hace uso de la palabra reservada extends. Agregando esta palabra reservada, ya tendríamos acceso a todas las propiedades y métodos de nuestra clase padre 🔥.
Sin embargo, ¿Qué sucede si nuestra clase Padre necesita dos propiedades para su inicialización? 🤔. Es aquí donde entra super(). Super es otra palabra reservada que no permite acceder al constructor padre 🤯 y así poder pasar estas propiedades desde el hijo . */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old`);
    }
}


class Student extends Person {
    constructor(name, age) {
      super(name,age); // <- 
    }
}
const person2 = new Person('Jesus', 27);
const student2 = new Student('Zajith', 27);
person.getInfo(); // My name is Jesus. I'm 27 years old
student1.getInfo(); // My name is Zajith. I'm 27 years old