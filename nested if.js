// nested if

const tamil = Number(prompt("Enter Tamil Marks "));
const English = Number(prompt("Enter English Marks "));
const Maths = Number(prompt("Enter Maths Marks "));
const Science = Number(prompt("Enter Science Marks "));
const social = Number(prompt("Enter Social Marks "));
const  Total = tamil + English + Maths + Science + social;
const avg = Total / 5;
console.log(Total);
console.log(avg);


if(tamil>=35 && English>=35 && Maths>=35 && Science>=35 && social>=35){
    if(avg>=91 && avg<=100){
        console.log(" A Grade ");
    }
    else if(avg>=81 && avg<=90){
        console.log(" B Grade ");
    }
    else if(avg>=71 && avg<=80){
        console.log(" C Grade ");
    }
    else if(avg>=35 && avg<=70){
        console.log(" D Grade ");
    }

}
    else{
        console.log("Your are Fail");
    }

