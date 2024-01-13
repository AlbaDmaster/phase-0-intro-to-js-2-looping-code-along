// Code your solutions in this file
for(let age=30;age<40;age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);

}

const gifts =["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);



function writeCards(array,event){
    for(let i=0;i<array.length;i++){
        console.log(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return array;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(num) {
    for (let i = -1; num > i; num--) {

      console.log(`${num}`);
    }
  }
  countDown(4);
