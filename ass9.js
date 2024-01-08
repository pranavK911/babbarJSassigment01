// //-------reverse string-------------//

function rev_string(name){
   let nam= name.toLowerCase();
    let count=0;
    for(let i=0;i<nam.length;i++){
      
        let v=nam[i];
        switch(v){
            case 'a':{
              count++;
              break;
            }case 'e':{
                count++;
                break;
              }case 'i':{
                count++;
                break;
              }case 'o':{
                count++;
                break;
              }case 'u':{
                count++;
                break;
              }
        }
    }
    return count;
}
console.log(rev_string("pranav"));
