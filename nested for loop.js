// nested for loop

let arr=[];

for(let i=0; i<3; i++){
    arr.push([]);
    for(let j=0; j<3; j++){
        arr[i].push(j);
    }    
}
console.log(arr);
console.table(arr);