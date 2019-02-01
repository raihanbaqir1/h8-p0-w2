var counter1 = 0;
var counter2 = 0;

function xo(str){
    for(var i = 0; i < str.length; i++){
        if(str[i]==='x'){
            counter1++;
            
        } else if(str[i]==='o'){
            counter2++;
            
        }
    }
    if(counter1===counter2){
        return true;
    } else {
        return false;
    }
}
console.log(xo('xoxox'));