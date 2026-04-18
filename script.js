let g = ''
function myFunction(val) {
    g = val;
}
function guessTheNumber(value) {
    
     const math = Math.floor(Math.random() * 10) + 1
     const guess = Number(value)
     if(guess < 10 && guess > 0){
 
         if (guess == math) {
             return "You Win Congratulation";
         } else {
              return "You number is " + guess + ' & Computer guess number is ' + math
         }
     }
     else{
            return "invalid Number ";
     }
   
    
 }; 
  document.getElementById(`check`).addEventListener(`click`, function(){
 const guessing = guessTheNumber(g);
 document.getElementById(`answer`).innerHTML = guessing;
     })
function evenOddCal(value) {
 const write = Number(value)
     if (write % 2 === 0) {
      return "You number is even " + write;
      
     } else {
       return"You number is odd " + write;
 }
         
}
 document.getElementById(`checker`).addEventListener(`click`, function(){
         const guessing = evenOddCal(g);
        document.getElementById(`answer`).innerHTML = guessing;
   })
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your number: ", (inputNumber) => {
//         const math = Math.floor(Math.random() * 100) + 1
//     const guess = Number(inputNumber)
//     if (guess == math) {
//         console.log("you win")
//     } else {
//          console.log("you number is " + guess + ' & computer guess number is ' + math)
//     }
//   rl.close();
// })
   
// function palinDrome() {
//     const input = prompt("Enter a word : ")
//      const word = input
//      const input2 = word.split("").reverse().join("") 
//      //is line ma ya ho raha ha ka revese array ka method or ya array
//     //  ka sath hi chalta to hum na pehla iput ko arrya banaya or phir 
//     //  ous array ko revese kia or join array ko string ma tod deta ha 
//     //   is sa hamre ya line chali 
//     if (word == input2) {
//         console.log(  input2 + ' is Palindrome Word ')
//     } else {
//           console.log("wrong")
//     }
// }
// palinDrome()
   

// function toCelcius(c) {
     
//     const convert =  c *  9/5 + 32
//     console.log(convert) 
// } 
// toCelcius(77) 
// function ageCalculator(value){ 
//     let now = new Date()
//     let select = new Date(value)
//     let year = now.getFullYear() - select.getFullYear()
//     let month = now.getMonth()  - select.getMonth()
//     let date = now.getDate() - select.getDate()
//     if (date < 0) {
//         month--
//         date += new Date(now.getFullYear(),now.getMonth(),0).getDate()
//     }
//     if (month < 0) {
//         year--
//         month += 12
        
//     }
//     return {year,month,date}
// } 
// console.log(ageCalculator("2000-2-29"))
// function tipCalculator() {
//     let bill = 1000
//    let tip = 10
//    let number = 10
//    let tipCal =(tip / 100) * bill
//    let built = tipCal + bill
//    let divide = built / number
// console.log(divide)
// }
// tipCalculator()
         
// function stopWatch(value) {

// const [h, m, s] = value.split('-').map(Number);

// return {h,m,s}
    
// }
// console.log(stopWatch("1-5-10"));

