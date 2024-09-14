let data=prompt("Enter a number");

let sum=0;
let n=data;
while(n>0){
 let last=n%10;
 let cal=last** data;
 sum+=cal;w

n=parseInt(n/10)}
if(data==sum){
    alert("armstrong number");
}
else{
    alert("not armstrong");
}
