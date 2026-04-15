class mahasiswa {
    nim:number;
    nama:string;

    constructor(param_nim: number, param_nama:string){
        this.nim = param_nim;
        this.nama = param_nama;
    }

    halo():string {
        return `halo ${this.nama} nim kamu :  ${this.nim}`; // `` backtick
    }
}

const anton = new mahasiswa(123, "anton");
console.log(anton.halo());

//enum

enum StatusMahsiswa {
    lulus = "L",
    aktif = "A",
    cuti = "c",
}

function DisplayStatus (status:string): void{
    if (status == StatusMahsiswa.lulus){
        console.log("Mahasiswa Sudah Lulus");
    }
    else if (status == StatusMahsiswa.aktif){
        console.log("Mahasiswa masih aktif");
    }
    else if (status == StatusMahsiswa.cuti){
        console.log("Mahasiswa Sedang cuti");
    }
    else {
        console.log("Mahasiswa kayaknya do");
    }
}

DisplayStatus("C");

//generic

function getelement <T>(param: T[]): T{
    return param[2]!;
}

const array = [1,2,3];
let hasil: number;
hasil = getelement<number>(array);
console.log(hasil);