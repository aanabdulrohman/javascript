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
// alert("This is alert")
// prompt("Input your thinking")

// if
let angka = Math.random()
console.log(angka)
if(angka > 0.5){
    console.log('Angka lebih besar dari 0.5')
} else {
    console.log('Angka kurang dari 0.5')
}

// else if
let nilai = Math.floor(Math.random() * 91) + 10
console.log(`Nilai kamu: ${nilai}`)
if (nilai == 100){
  console.log("Jadinya nilai kamu A+")
} else if (nilai >= 90) {
  console.log("Jadinya nilai kamu A")
} else if (nilai >= 80) {
  console.log("Jadinya nilai kamu B")
} else if (nilai >= 70) {
  console.log("Jadinya nilai kamu B-")
} else if (nilai >= 60) {
  console.log("Jadinya nilai kamu C")
} else if (nilai >= 50) {
  console.log("Jadinya nilai kamu D")
} else if (nilai <= 50){
  console.log("Jadinya nilai kamu E")
} else {
  console.log("Maaf, nilai yang anda masukkan salah")
}

// if bersarang
// let password = prompt("Password harus 6 karakter dan mengandung simbol")
// const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/
// if (password.length >= 6){
//   if(password.indexOf(" ") === -1){
//     if(symbolPattern.test(password)){
//       console.log("Password valid")
//     } else {
//       console.log("Password harus mengandung simbol")
//     }
//   } else {
//     console.log("Password tidak boleh ada spasi")
//   }
// } else {
//   console.log("Password minimal 6 karakter")
// }
