// switch
let num = 1;
switch(num){
    case 1:
    console.log("one");
    break;
    case 2:
    console.log("two");
    break;
    case 3:
    console.log("three");
    break;
}


// combining switch

let v = prompt("Enter a character vowels or not ");
switch(v){
    case'a':
    case'e':
    case'i':
    case'o':
    case'u':
    case'A':
    case'E':
    case'I':
    case'O':
    case'U':
        console.log( v + " is a vowel");
        break;
    default:
        console.log( v + " not a vowel");
        break;

}