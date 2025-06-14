// Q1. Create two buttons:
// Button 1: Prompt the user to enter their favorite subject.
// Button 2: Display "Your favorite subject is: [subject]" in an <h4> tag using innerHTML.

// let favoriteSub="";
// let askSubject=()=>{
//     favoriteSub=prompt("enter your favourite subject")
// }

// let displaySubject=()=>{
//    let output= document.querySelector("#output");
//    output.innerHTML="your favourite subject is "+favoriteSub;
    
// }



// Button 1: Prompt the user to enter a color (like "red", "blue", "#ffcc00").
// Button 2: Change the background color of the page to the color the user entered.

// let selectedColor="";
// let Select=()=>{
//     selesctedColor=prompt("Enter color name")
// }

// let Change=()=>{
//     document.body.style.backgroundColor=selectedColor;
// }




//  Q3. Add Two Numbers
// Button 1: Prompt the user to enter two numbers.
// Button 2: Display the sum of those numbers in an <h4> tag.


// let num1="";
// let num2="";

// let input=()=>{
//     num1=Number(prompt("enter a number"));
//     num2=Number(prompt("enter a number"));
// }

// let output=()=>{
//     document.querySelector("#result").innerHTML=(num1+num2);
// }



// Question. (String Methods)
// Create a button that:
// Prompts the user for a sentence.
// Convert the entered sentence into uppercase.Display the result inside a <p> tag.


// let sentence="";
// let uppercase=()=>{
//     sentence=prompt("Enter sentence");

//     document.querySelector("#out").innerHTML=sentence.toUpperCase();
// }



// Q5. Create a simple form where:
// The user enters a number in an input field.
// When they click a button, print the sum of numbers from 1 to the entered number inside a <p> tag.


// let CalculateSum=()=>{
//     let input=document.querySelector("#calculate").value;
//     let sum=0;
//     for (let i = 1; i <=input; i++) {
//         sum=sum+i;
        
//     }
//     let ptag=document.querySelector("#showsum");
//     ptag.innerHTML=sum;
// }




// Q6.Create a counter using innerHTML:
// The counter starts at 10.
// Add two buttons: "Increment by 3" and "Decrement by 3".
// Use inline onclick methods to increase or decrease the value of the counter.

// let count=10;




// let increment=()=>{
    
//     count=count+3;
//     document.querySelector("#ptag").innerHTML=count;

// }

// let decrement=()=>{
    
//     count=count-3;
//     document.querySelector("#ptag").innerHTML=count;
// }




// Q7 (String Practice)
// Ask the user to input a sentence using prompt.
// Use slice() to extract the first 5 characters of the string.
// Display the extracted portion inside a <p> tag.

// let extract=()=>{
//     let input=prompt("enter senstence");
//     let ptag=document.querySelector("#text");

//     ptag.innerHTML=input.slice(0,5);
// }




// Q8 (String Methods)
// Prompt the user to enter any word.
// Check if the word ends with "ing".
// Display "Yes, it ends with 'ing'" or "No, it does not" inside a <p> tag.


// let Check=()=>{
//     let input=prompt("enter a word");
//     let ptag=document.querySelector("#text");

//     if (input.includes("ing")) {
//         ptag.innerHTML="yes, it does"
//     }
//     else{
//         ptag.innerHTML="No, it does not"
//     }

// }





// Q9 (Array Practice)
// Create an array with numbers [2, 4, 6, 8, 10].
// Use a for loop to add 5 to each number.
// Display the updated array inside a <p> tag.

// let update=()=>{
// let numbers = [2, 4, 6, 8, 10];
//     for (let i = 0; i < numbers.length; i++) {
//     numbers[i]=numbers[i]+5;
// }
// document.querySelector("#array").innerHTML=numbers

// }



// Q10. Create a button that:
// Prompts the user for a number.
// Check if the number is greater than 100.
// Display "Number is greater than 100" or "Number is less than or equal to 100" in an <h3> tag.

// let check=()=>{
//     let h3tag=document.querySelector("#result");
//     let num=prompt("enter a number");
//     if (num>100) {
//         h3tag.innerHTML="Number is greater than 100";
        
        
//     } else {
//         h3tag.innerHTML="Number is not greater than 100";
//     }
// }




//     <!-- Q11
// Create an image gallery with 3 images (initially the first image is displayed).

// Add two buttons: "Next" and "Previous".
// When "Next" is clicked, display the next image.
// When "Previous" is clicked, go back to the previous image.
// Use inline onclick for the buttons. -->


let previous=()=>{
    let image=document.querySelector("#img");

    image.src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
}

let next=()=>{
    let image=document.querySelector("#img");

    image.src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
}