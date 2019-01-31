/*Diberikan sebuah function bandingkanAngka(angka1,angka2) yang menerima dua parameter angka.
Function akan me-return nilai true jika angka-angka lebih besar dari angka1, dan sebaliknya.
Jika kedua angka bernilai sama, function akan me-return 1.*/

function bandingkanAngka(angka1, angka2){
    if(angka1 === angka2){
        return -1;
    } else if(angka1 > 1 && angka2 > 1){
        return true;
    } else{
        return false;
    }
}
var angka1 = 2;
var angka2 = 2;
console.log(bandingkanAngka(angka1, angka2));