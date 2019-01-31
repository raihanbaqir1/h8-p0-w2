


function konversiMenit(menit){
    if(menit < 60){
        return '0:'+menit;
    } else if(menit >= 60){
        return (menit/60)+':'+(menit%60);
    }
}
console.log(konversiMenit(63));