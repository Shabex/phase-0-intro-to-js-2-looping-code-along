// Code your solutions in this file
const name = ["Guadalupe","Ollie", "Aki"];
function writeCards(name) {
    let messages = [];
for (let i=0; i<name.length; i++){
    messages.push (`Thank you, ${name[i]}, for the wonderful surprise gift!`);
}
return messages;
}
 
let decrement = 10; 
function countDown (decrement){
   while (decrement >= 0) {
       console.log(decrement);
       decrement -= 1;
   }  
}
countDown(decrement);