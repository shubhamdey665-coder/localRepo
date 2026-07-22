let no = prompt("Enter any number:");
let reverse =0;
let last;
let original=no;

for(;no>0;no = Math.floor(no / 10))
{
    last=no % 10;
    reverse = reverse * 10 + last;
}
if (original == reverse) {
    console.log("The number is a palindrome.");
}
else {
    console.log("The number is not a palindrome.");
}