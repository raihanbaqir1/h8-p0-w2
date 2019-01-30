//Melakukan Looping Menggunakan While
/*Looping Pertama*/

var counter = 0;
while(counter<20){
    counter = counter+2;
    console.log(counter+' '+'-'+' '+'I love coding');
}
/*Looping Kedua*/

counter = 22;
while (counter>2){
    counter = counter-2;
    console.log(counter+' '+'-'+' '+'I will become fullstack developer');
}
//Melakukan Looping Menggunakan For
//Looping Pertama
counter = 1;
for(var counter=1; counter < 21; counter++){
    console.log(counter+' '+'-'+' '+'I love coding');
}
//Looping Kedua
counter = 21;
for(var counter=20; counter > 0; counter--){
    console.log(counter+' '+'-'+' '+'I will become fullstack developer');
}
//Angka Ganjil dan Genap
/*Problem
Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya.*/


for(var counter=1; counter < 101; counter++){
    if(counter%2===0){
        console.log('GENAP');
    } else{
        console.log('GANJIL');
    }
}
//Pertambahan 2

for(counter=1; counter < 101; counter = counter+2){
    if(counter%3===0){
        console.log(counter+' '+'kelipatan 3');
    } 
}

//Pertambahan 5
for(counter=1; counter < 101; counter = counter+5){
    if(counter%6===0){
        console.log(counter+' '+'kelipatan 6');
    } 
}

//Pertambahan 9
for(counter=1; counter < 101; counter = counter+9){
    if(counter%10===0){
        console.log(counter+' '+'kelipatan 10');
    } 
}


