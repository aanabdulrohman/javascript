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
const usernameFilter = {
  "yuyus": "admin",
  "aan": "user"
}
function loginFilter(){
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;
  const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/

  // validate username
  if (!(username in usernameFilter)){
    alert("Invalid username")
  }

  // validate password
  if (password.length >= 6){
    if(password.indexOf(" ") === -1){
      if(symbolPattern.test(password)){
        console.log("Password valid")
      } else {
        alert("Password harus mengandung simbol")
      }
    } else {
      alert("Password tidak boleh ada spasi")
    }
  } else {
    alert("Password minimal 6 karakter")
  }
  
  if(usernameFilter[username] === "user"){
    window.location.href = "home-user.html";
  } else if (usernameFilter[username] === "admin"){
    window.location.href = "home.html";
  }
}