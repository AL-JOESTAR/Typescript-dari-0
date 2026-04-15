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

// array level
let level: (string | boolean)[];
level = ["halo" , "nama saya", true]

// var namasaya = "al";

// Compile
console.log(nama); // tanpa object
console.log({nomor});
console.log({IsDead});
console.log({biasa});
console.log({tuple});
// console.log({namasaya});
console.log({level});

//object
let mahasiswa: object[] = [
    {nim:123, nama:"reza"},
    {nim:456, nama:"anton"},
]

console.log (mahasiswa); // {} untuk menampilkan object
console.log (typeof mahasiswa);// untuk melihat tipe data

// function 
function tambah (a:number,b:number){
    return a + b;
}

console.log(tambah(1,5));

function tambah2 (a:number,b:number): void{ // tidak mengeluarkan return
    let tambah =  a + b;
    console.log(tambah)
}

tambah2(1,7);

function pesan (pesan:string): string{
    return pesan;
}

console.log(pesan("halo dunia"));

// interface
interface identitas {
    nim:number,
    nama:string,
}

let mahasiswa_1:identitas ={
    nim:123,
    nama:"reza",
}

console.log(mahasiswa_1);



//intersection (gabungan beberapa interface)
interface dosen {
    nidn : number,
    nama_dosen:string;
}

type dpa = identitas & dosen;

let dpa = {
    nim:123,
    nama:"anton",
    nidn:2908,
    nama_dosen:"morger",
}

console.log(dpa);
