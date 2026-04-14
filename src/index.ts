let nama: string = "AlJoestar";
let nomor: number = 123;
let IsDead: boolean = false;
let apaaja; // tipe data any
let multi: number | string; //multi tipe data

//array biasa
let biasa: string[];
biasa = ["al", 'Joestar'];

// tuple menentukan tipe data mulai dari index 0
let tuple: [string, number, boolean];
tuple = ["al", 5, true];


console.log(nama); // tanpa object
console.log({nomor});
console.log({IsDead});
console.log({biasa});
console.log({tuple});
