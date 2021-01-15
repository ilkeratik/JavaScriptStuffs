// fibonacci array generator

function generateFib(n){
  let arr= [0,1];
  for(let i = 2; i < n+1; i++){
    arr.push(arr[i-1]+arr[i-2]);
  }
  return arr.slice(0, n); // slice is for the value 1 of n. It will return 0 only.
}
