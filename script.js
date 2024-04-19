// function func1(num1, num2, num3 = 1, num4 = num1){
//     num1 *= num4;
//     num3 += 1;
//     if(num2 === num3){
//         console.log(num1);
//         return;
//     }
//     func1(num1, num2, num3, num4);
// }

// func1(2, 4);

document.open();

let number = Number(prompt("Введите число:"));
let number2 = Number(prompt("Введите предел числа"));
func1(number);

function func1(num1, num2) {
    if (num1 > num2) {
        document.close();
        return;
    }
    num1 +=1
    if(num1 % 2 === 0){
        document.write(`<h1>${num1}</h1>`);
    }
    func1(num1, num2);
}


// function func3 (element) {
//     console.log(element.number)
//     if (element.next) {
//         func3(element.next)
//      }
// }


// const obj = {
//     number: 1,
//     next: {
//         number: 2,
//         next: {
//             number: 3,
//             next: {
//                 number: 4,
//                 next: {
//                     number 5,
//                 }
//             }
//         }
//     }
// }
// func3(obj)