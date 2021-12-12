// function declaration
// function KelilingLingkaran ( D ) {
//     // D merupakan parameter dari value yang akan dimasukkan
//     let r = D / 2;
//     // r = mencari jari-jari dari Diameter 
//     let KelilingLingkaran = 2 * 3.14 * r;
//     // Rumus keliling lingkaran
//     return KelilingLingkaran
//     // Return untuk menyimpan hasil dari menghitung keliling lingkaran
// }
// console.log("hasil keliling lingkaran " + KelilingLingkaran(24));
// console.log("hasil dari KelilingLingkaran2 " + KelilingLingkaran(21));

// Function esxpression
let total = function(p, l, s){

    let LPersegiPanjang = p*l;
    let LPersegi = s*s;

    let total = LPersegiPanjang + LPersegi;
    return total;
};
console.log (total(3, 6, 2));

// Arrow function
let nama = () => {
    console.log("IVAN GANTENG BGT");
};
nama();

let angka = [1, 2, 5, 7, 8, 3, 9, 4]
//built in function 

// menggunakan method push
//angka.push(100000);
function tambahArray(a){
    //return angka.push(a);
// kita juga bisa  menggunakan method unshift untuk menambah index
// menggunakan unshift. (menambahkan nilai didepan array)
    return angka.unshift(20);
}
tambahArray(10);
console.log(angka);

// untuk menghapus element array dari belakang 
//angka.pop();
//console.log(angka);
// untuk menghapus element dari depan
//angka.shift();
//console.log(angka);

// method map dan join
//angka2 = angka.map(function(a) {
    // return a * 2
//})
////console.log(angka2.join("      // D merupakan parameter dari value yang akan dimasukkan
    let r = 2;
    // r = mencari jari-jari dari Diameter 
    let KelilingLingkaran = 2 * 3.14 * r;
    // Rumus keliling lingkaran
    // return KelilingLingkaran;
    // Return untuk menyimpan hasil dari menghitung keliling lingkaran

// console.log("hasil keliling lingkaran " + KelilingLingkaran(24));
console.log("hasil dari KelilingLingkaran2 " + KelilingLingkaran);

// Function esxpression

// lanjutan kemarin

let hewan =['rusa','sapi','kuda' , 'monyet']
// method splice
hewan.splice(2,0, 'landak');
// rumus splice (index awal, maudihapusbeberapa, element1, element2, .... )
console.log(hewan.join(', '))

// method slice 
let hewan2 = hewan.slice(1,4)
// rumus slice (indexawal, indexakhir)
console.log(hewan2.join(', '));


//let mahasiswa = ['faisal', 'ali', 'muhammad']

//mahasiswa.forEach(function(e,i) {
   // console.log('mahasiswa '+ (i+1) + ' adalah' +e);
//})

//let angka1 = [1,4,9,8,7,3,2,0,7,6,5,4,45,11]

//let angka2 = angka1.filter(function(x){
    //return x > 4 && x < 7
//})
//console.log(angka2.join(', '));

//method slice
function hilangkanhuruf(x) {
    let a = x.split('a')
    return a.join(' ')
}
console.log(hilangkanhuruf('ivander josh santoso'))