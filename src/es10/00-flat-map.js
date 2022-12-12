const array = [1,2,5,7,1,4, [3,76,87,91,[1,43,2]]];
console.log(array.flat(3));

// flatmap

const array2 = [5,9,8,25,69];
console.log(array2.flatMap(v => [v , v * 2]));