


function konversiMenit(menit){
    if(menit >=1 && menit <=9){
        return '00:'+'0'+menit;
    } else if(menit >=10 && menit <=59){
        return '00:'+menit;
    } else if(menit >=60 && menit <=549){
        return Math.floor((menit/60))+':'+'0'+(menit%60);
    
}
}
console.log(konversiMenit(539));