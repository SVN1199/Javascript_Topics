// scope in js
// block scope and function scope

// function scope
function scope(){
    let scopes = "Block scope in function ";
    console.log(scopes);
}
//console.log(scopes);  // block scope
//scope();

// function scope
function add(){
    const adds = "Addition in function ";
    function sub(){
        console.log(adds);
    }
    sub();
}
add();