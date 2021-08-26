// alert("Hello World");

// let yellGreeting = "Hi".toUpperCase();

// console.log(yellGreeting)

// console.log("Goodbye")




// if (1+1 === 2){
//     console.log("Math Works")
// }
// console.log("After If Statement")

// let rand = Math.random();
// if(rand < 0.5){
//     console.log(`Number was less than 0.5 ${rand}`)
// }




// let rating = 2;
// if (rating === 3){
//     console.log("rating is 3")
// }
// else if (rating === 2){
//     console.log("rating is 2")
// }

// const dayOfWeek = 'Monday';
// if (dayOfWeek === "Monday"){
//     console.log("Monday is Horribble");
// }
// else if (dayOfWeek === "Saturday"){
//     console.log("I Love Saturday");
// }
// else if (dayOfWeek === "Sunday"){
//     console.log("Sunday is just alright");
// }

// const age = 22;
// if (age < 5){
//     console.log("You get in Free as an infant")
// }
// else if (age < 10){
//     console.log("You must pay $10 as a child")
// }
// else if (age < 65){
//     console.log("You must pay $20 as an adult")
// }
// else if (age >= 65){
//     console.log("You must pay $10 as a senior")
// }




// const dayOfWeek = 'Thursday';
// if (dayOfWeek === "Monday"){
//     console.log("Monday is Horribble");
// }
// else if (dayOfWeek === "Saturday"){
//     console.log("I Love Saturday");
// }
// else if (dayOfWeek === "Sunday"){
//     console.log("Sunday is just alright");
// }
// else{
//     console.log("Meh")
// }


const password = prompt("Please Enter Your Password");
// Password must be more than 6 chars
// Password must not include space
if (password.length >= 6){
    if(password.indexOf(" ") === -1){
        console.log("Good Password")
    }
    else{
        console.log("Password constains space")
    }
}
else{
    console.log("Password not 6 or more characters")
}