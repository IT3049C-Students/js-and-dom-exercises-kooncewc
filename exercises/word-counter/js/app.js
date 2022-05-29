// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
var input = document.getElementById("text");
var stats = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input

input.addEventListener('input',Updatecount);

// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
function Updatecount(input){
wordcount = input.length;
wordcount2 = input.split("");




return wordcount, wordcount2;
}


// 🤖: You will need to utilize the split method to get the words count.