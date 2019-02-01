


function konversiMenit(menit){
    if(menit >=1 && menit <=9){
        return '0:'+'0'+menit;
    } else if(menit >=10 && menit <=59){
        return '0:'+menit;
    } else if(menit >=60 && menit%60 <10){
        return Math.floor((menit/60))+':'+'0'+(menit%60);
    } else if(menit >=60 && menit%60 >=10){
        return Math.floor((menit/60))+':'+(menit%60);
    }
}
console.log(konversiMenit(53));