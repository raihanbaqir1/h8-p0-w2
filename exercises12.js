


function konversiMenit(menit){
    if(menit < 60){
        return '00:'+menit;
    } else if(menit > 60 && menit < 69){
        return '00:'+''+menit%60;
    } else if(menit > 69){
        return Math.floor((menit/60))+':'+(menit%60);
    
}
console.log(konversiMenit(80));