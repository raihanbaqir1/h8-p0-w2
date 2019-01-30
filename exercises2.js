
var nama = 'Raihan';
var peran = 'Warga';
​
if (nama===''){
  console.log('Nama harus diisi!');
} else if(peran===''){
  console.log('Halo '+nama+', silahkan pilih peran');
} else {
    console.log('Selamat Datang di dunia Proxytia, '+nama);
    if(peran==='Ksatria'){
      console.log('Halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu');
    } else if(peran==='Tabib'){
      console.log('Halo '+peran+' '+nama+', kamu dapat membantu temanmu yang terluka');
    } else if(peran==='Penyihir'){
      console.log('Halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu');
    } else{
      console.log('Maaf '+nama+', peranmu tidak tersedia di game ini');
    }
}
​
