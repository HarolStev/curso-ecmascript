const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Kiwi, Banana, Apple, Orange, etc, pera, blackberry'

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}