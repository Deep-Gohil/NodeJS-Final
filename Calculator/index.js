const prompt = require('prompt-sync')();

const Addition = () => {
    let a = prompt("Enter a Number: ");
    let b = prompt("Enter b Number: ");
    console.log(Number(a) + Number(b));
}

const Subtraction = () => {
    let a = prompt("Enter a Number: ");
    let b = prompt("Enter b Number: ");
    console.log(Number(a) - Number(b));
}

const Multiplication = () => {
    let a = prompt("Enter a Number: ");
    let b = prompt("Enter b Number: ");
    console.log(Number(a) * Number(b));
}

const Division = () => {
    let a = prompt("Enter a Number: ");
    let b = prompt("Enter b Number: ");
    if (Number(b) === 0) {
        console.log("Can Not Devide By Zero");
    } else {
        console.log(Number(a) / Number(b));
    }
}

let choice;

do {
    console.log("Press 1 For Addition ");
    console.log("Press 2 For Subtraction ");
    console.log("Press 3 For Multiplication ");
    console.log("Press 4 For Division ");
    console.log("Press 0 To Exit ");
    
    choice = prompt("Enter your choice: ");
    
    switch (choice) {
        case '1':
            Addition();
            break;
        case '2':
            Subtraction();
            break;
        case '3':
            Multiplication();
            break;
        case '4':
            Division();
            break;
        case '0':
            break;
        default:
            break;
    }
} while (choice !== '0');
