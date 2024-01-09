function check(num){
    if(num<0){
        return "number is negative";
    }else if(num>0){
        return "number is positive ";
    }
    else{
        return "number is zero"
    }
}
console.log(check(8));