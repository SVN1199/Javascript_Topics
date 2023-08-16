// object connvert into array

const arr = {
    'name':'kutty',
    'age':14,
    'gender':'male',
}

let arr_key=Object.keys(arr);
console.log(arr_key); 

let arr_values=Object.values(arr);
console.log(arr_values); 

for (let i=0;i<arr_key.length; i++){
    console.log(arr_key[i] + " : " + arr_values[i]);
    //console.log(arr[arr_key[i]])
}

const vote ={
    'name':'vasanth',
    'age':23,
    'gender':'male',
    'status':'eligible for vote'
}

let vote_keys = Object.keys(vote);
let vote_values = Object.values(vote);

for(let i=0 ; i<vote_keys.length ; i++){
    console.log(vote_keys[i] + ' : ' + vote_values[i]);
}


