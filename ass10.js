function common(arr1,arr2){
    let len1=arr1.length;
    let len2=arr2.length;
    let arr=[];
  for(let i=0;i<len1;i++){
    for(let j=0;j<len2;j++){
        if(arr1[i]===arr2[j]){
            arr.push(arr1[i]);
        }
    }
  }
  console.log(arr);
}
let arr1=[1,3,4,5,6];
let arr2=[2,3,6,4,5,1];
common(arr1,arr2);