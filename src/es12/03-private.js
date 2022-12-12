// Traemos de la clase es6 de clases
class User{
    //constructor
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak() {
        return 'Hello';
    }/*se agrega almohadilla para identificar este metodo se vuelve privado, solo puede ser accedido dentro de la misma clase
    */
    greeting() {
        return `${this.speak()} ${this.name}`
    }
// Igual en los get and set
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper = new User('Carolina',28);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);
console.log(bebeloper.greeting());