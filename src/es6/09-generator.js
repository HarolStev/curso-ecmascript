function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Valentina', 'Carolina', 'Amparo', 'Alberto', 'Harol','Emanuel']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



function* getId() {
    let lastId = 1;
    while (true) {
        yield lastId++;
    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
id.next().value
id.next().value