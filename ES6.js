var w = [1,4,9,16,25]
var x = w.map(Math.sqrt);
var y = w.map((val)=> val * 2);
var z = w.map((val)=> val!==9);
// console.log(x);
// console.log(y);
// console.log(z);

// var orang = [
//     {nama : "Andi", marga: "Hasibuan"},
//     {nama : "Budi", marga: "Sinaga"},
//     {nama : "Caca", marga: "Pasaribu"}
//     ];
//     function namaLengkap(item, index) {
//     var fullname = [item.nama,item.marga].join(" ");
//     return fullname;
//     }
    // function tesMap() {
    // console.log(orang.map(namaLengkap));
    // console.log(orang.map(namaLengkap)[0]);
    // console.log(orang.map(namaLengkap)[1]);
    // console.log(orang.map(namaLengkap)[2]);
    // }
    // tesMap()

let merk = 'Yamaha';
let tahun = 2015;
let mio = {
merk: merk,
prod: tahun
}
let vixion = {
merk, tahun
}
console.log(mio);
console.log(vixion);
