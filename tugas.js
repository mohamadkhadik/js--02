// anda disuruh membuat sebuah function untuk menghapus semua tanda seru yang terdapat pada string. Output yang diharapkan sebagai berikut :
// removeTandaSeru("!Hello! World!") //"Hello World"

// let hari = [‘senin’, ‘selasa’, ‘rabu’, ‘jumat’, ‘minggu’];
// anda disuruh menambahkan nama hari yang kurang pada array di atas.Output yang di harapkan :
// hari ini hari senin
// hari ini hari selasa
// hari ini hari rabu
// dst

 
 function remov (x){
     let a = x.split('!')
     return a.join('');
};
console.log(remov('!HELLO! WORLOD!'));
 
// let mahasiswa = ['faisal', 'ali', 'muhammad']

// mahasiswa.forEach(function(e,i) {
//     console.log('mahasiswa '+ (i+1) + ' adalah' +e);
// })

let hari=['senin','selasa','rabu','kamis','jumat','minggu']
hari.forEach(function(x) {
    console.log('Hari Ini Hari '+ x);
    
})


