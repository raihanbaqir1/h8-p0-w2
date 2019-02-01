var tanggal = 8;
var bulan = 2;
var tahun = 2200;

var result= ''

switch(bulan){
  case 1:
    bulan='Januari';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
      result=tanggal+' '+bulan+' '+tahun;
    } else {
      result='Invalid';
    }
    break;
  case 2:
    bulan='Februari';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
      }
    break;
  case 3:
    bulan='Maret';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 4:
    bulan='April';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 5:
    bulan='Mei';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 6:
    bulan='Juni';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 7:
    bulan='Juli';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 8:
    bulan='Agustus';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 9:
    bulan='September';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 10:
    bulan='Oktober';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 11: 
    bulan='November';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
  case 12:
    bulan='Desember';
    if((tanggal>=1 && tanggal<=31) && (tahun>=1900 && tahun<=2200)){
        result=tanggal+' '+bulan+' '+tahun;
    } else {
        result='Invalid';
    }
    break;
}

console.log(result)
