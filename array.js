/* ==============Array: ===================*/
var person = {firstName:"Aarush", lastName:"Aarul", age:10};
//console.log(person.firstName);

/* ==============Accessing the Last Array Element ===================*/
var computers =  ["HP", "Lenovo", "Apple", "Acer", "Dell", "NEC"];
var first = computers[0];
var second = computers[1];


var lastthird = computers[computers.length - 3];
var lastsecond = computers[computers.length - 2];
var last = computers[computers.length - 1];
//console.log(first + " " + second + " " + lastthird + " "+lastsecond + " " + last); 

/* ==============Looping Array Elements: for loop ===================*/
var computers, no0fcomputer, computersname, i ;
computers =  ["HP", "Lenovo", "Apple", "Acer", "Dell", "NEC"];
no0fcomputer = computers.length;

//console.log(no0fcomputer);

computersname = "";
for(i=0; i<no0fcomputer; i++) {
    computersname += " " + computers[i] + "\n";
}
//computersname += computersname;

//console.log(computersname);

/* ==============Looping Array Elements: for each ===================*/
var computers, no0fcomputer, computersname, value ;
computers =  ["HP", "Lenovo", "Apple", "Acer", "Dell", "NEC"];

computers.forEach(checkComputer);

no0fcomputer += ""

function checkComputer(value) {
    no0fcomputer += "<li>" + value + "</li>"
}

//console.log(no0fcomputer);

/* ==============Adding Array Elements ===================*/
var computers, no0fcomputer, computersname, value ;
computers =  ["HP", "Lenovo", "Apple", "Acer", "Dell", "NEC"];
computers[computers.length] = ("MAC")
//console.log(computers);
//console.log(computers[6]);

/* ==============Associative Arrays ===================*/
/* Define: Arrays with named indexes are called associative arrays (or hashes). */

var book = []
book["book1"] = "Hindi"
book[1] = "English"
book[3] = "Math"

x = book.length
//y = book[book1] // giving undefined value
y = book.book1 // correct way
//console.log(x);
//console.log(y);

/* ==============How to Recognize an Array ===================*/
computers =  ["HP", "Lenovo", "Apple", "Acer", "Dell", "NEC"];

typeof computers;    // returns object
//console.log(computers);
//console.log(Array.isArray(computers));

computers instanceof Array;   // returns true
console.log(Array.isArray(computers));






