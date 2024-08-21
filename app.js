// to uppercase and lowercase
let normal = 'Hello World';
let makeUpercase = normal.toUpperCase()
let makeLowercase = normal.toLowerCase()
console.log(normal)
console.log(makeUpercase)
console.log(makeLowercase) 

console.log(normal.indexOf('World')) //mencari urutan kata
console.log(normal.slice(0,5)) //mengeluarkan huruh 0-5
console.log(normal.replace('Hello', 'Hallo').replace('World', 'Dunia')) //mengubah isinya

let namaDepan = 'Aan'
let namaTengah = 'Abdul'
let namaAkhir = 'Rohman'
console.log(`nama depan saya ${namaDepan}, nama tengah saya ${namaTengah}, dan nama akhir saya ${namaAkhir} jadi nama lengkap saya ${namaDepan} ${namaTengah.toLowerCase()} ${namaAkhir.toLowerCase()}`) //menggaungkan variable dengan concat

