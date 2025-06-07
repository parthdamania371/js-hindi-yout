// two types of memory
//stack and heap

// Stack(primitive)

let myname ="parth";
anothername = myname;
anothername ="badsha";

console.log(myname)
console.log(anothername)

// Heap(non primitive )

let userone ={
    email: "parthdamania98@icloud",
    upi:"parth@sbi"
}
let usertwo = userone

usertwo.email ="parth@google.com"

console.log(userone);
console.log(usertwo);