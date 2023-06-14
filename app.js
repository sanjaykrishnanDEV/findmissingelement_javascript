
let arr = [2,5,3,1]

function zeroEnd(arr){
    arr.sort(function(a,b){return a-b})
    for(let i=0;i<(arr.length);i++){
    if(arr[i+1]-arr[i] !== 1){
        return arr[i]+1;
    }
   }

}
document.write(zeroEnd(arr))
