var a;
var b= 2;
// console.log(a);
a= 4;

b=a;
// console.log(b);

var a = 3;
var b = 2;
var c = "I am";

a= a + 5;
b= b + 1;
c= c + " Oliver_code1";

// console.log(c)



var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// console.log(titleCaseOver);

var sum= 10 + 10;
// console.log(sum); 

var difference= 30 - 20;
// console.log(difference);

var product= 7 * 4;
// console.log(product);

var quotient= 28 / 7;
// console.log(quotient);

var myVar = 8;
myVar= myVar + 1;
// console.log(myVar);

var myVarPlus= 8;
myVarPlus= myVarPlus++;// did not work (it read the above line of code)
// console.log(myVarPlus);

var myNum = 8;
myNum=myNum++;// did not work (it read the above line of code)
// console.log(myNum);

var myVarPluss = 8;
myVarPluss++;
// console.log(myVarPluss);

var myVar= 11;
myVar= myVar -1;
// console.log(myVar);

var myVar = 11;
myVar = myVar--;// did not work (it read the above line of code)
// console.log(myVar);

var  number  = 11;
number--;
// console.log(number);


var product= 2.0 * 0*0;
// console.log(product);

var quotient= 4.4 / 2.0;
// console.log(quotient);

var remainder;
remainder = 11 % 3;
// console.log(remainder);


var a= 3;
var b=17;
var c= 12;

a= a + 12;
b= 9 + b;
c= c + 7;

// console.log(a);
// console.log(b);
// console.log(c);

var a= 3;
var b=17;
var c= 12;

a+= 12;
b+= 9;
c+= 7;

// console.log(a);
// console.log(b);
// console.log(c);

var a = 11;
var b= 9;
var c = 3;

a=a -6;
b=b -15;
c= c-1;

// console.log(a);
// console.log(b);
// console.log(c);

var a = 11;
var b= 9;
var c = 3;

a-=6;
b-=15;
c-=1;

// console.log(a);
// console.log(b);
// console.log(c);

var a =5;
var b= 12;
var c= 4.6;

a =a * 5;
b= 3 * b;
c= c * 10;

// console.log(a);
// console.log(b);
// console.log(c);

var a= 5;
var b= 12;
var c= 4.6;

a*= 5;
b*= 3;
c*= 10;

// console.log(a);
// console.log(b);
// console.log(c);

var a= 36
var b= 12
var c= 33

a= a/12;
b= b/4;
c= c/11;

// console.log(a);
// console.log(b);
// console.log(c);

a/=12;
b/=4;
c/=11;

// console.log(a);
// console.log(b);
// console.log(c);

var myStr= "I am a \"double quoted\" string inside \"double quotes\"";
//console.log(myStr);

var myStr= "<a href=\"http://www.example.com\" target= \"_blank\">Link</a>";
//console.log(myStr);

var myStr= '<a gref="http://www.example.com" target= "_blank">Link</a>';
//console.log(myStr)

var myStr= `'<a gref="http://www.example.com" target= "_blank"Link</a>'`;/*having both the single quote and double quote and 
                                                                         this is with the use of backquote or backtick*/
//console.log(myStr)

var myStr= "FirstLine\n \t \\SecondLine\nThirdLine";
//console.log(myStr);

var ourStr= "I come first." + " I come Second."; //same with the next two ones
//console.log(ourStr);

var myStr= "This is the start. " + "This is the end.";
//console.log(myStr);

var ourStr= "I come first. ";
ourStr+= "I come second."; 
//console.log(ourStr);

var myStr = "This is the first sentence. ";
myStr+= "This is the second sentence";
//console.log(myStr);

var ourName= "freeCodeCamp";
var ourString= "Hello, our name is " + ourName + ", how are you?";
//console.log (ourString);

var myName= "Beau";
var myStr= "My name is " + myName + " and I am well!";
//console.log(myStr)

var anAdjective= "awesome!";
var ourStr= "freeCodeCamp is ";
ourStr += anAdjective;
//console.log(ourStr)

var someAdjective= "worthwhile";
var myStr = "Learning to code is ";
myStr+=someAdjective;
//console.log(myStr);

var firstNameLength= 0;
var firstName= "Ada";
firstNameLength= firstName.length;
//console.log(firstNameLength);

var lastNameLength=0;
var lastName="Lovelace";
lastNameLength= lastName.length;
//console.log (lastNameLength);

var firstLetterOfFirstName= "";
var firstName= "Ada";
firstLetterOfFirstName= firstName[0]; 
//console.log(firstLetterOfFirstName);

var firstLetterOfLastName= "";
var lastName= "Chidubem";
firstLetterOfLastName=lastName[0];
//console.log(firstLetterOfLastName);

var myStr="Jello World";
myStr[0]= "H"; //would throw an error
myStr= "Hello World";//correct way to fix it

var lastName= "Okeke"
var secondLetterOfLastName= lastName[1]
//console.log(secondLetterOfLastName);

var lastName= "Okeke"
var fourthLetterOfLastName= lastName[3]
//console.log(secondLetterOfLastName);

var lastLetterOfFirstName="";
var firstName= "AdaOwerri";
var lastLetterOfFirstName= firstName[firstName.length-1];
//console.log(lastLetterOfFirstName);

var firstName= "EzigboAda";
var thirdToLastName= firstName[firstName.length-3];
//console.log(thirdToLastName);

var lastName="Lovelace";
var secondToLastLetter= lastName[lastName.length-2];
//console.log(secondToLastLetter);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

    var result= "";
    //result += "The " + myAdjective + myNoun + myVerb + " to the store " + myAdverb // check that there are no spaces when you run this
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb // been fixed by adding spaces



    return result;
}
// console.log(wordBlanks("dog", "big" , "ran", "quickly"));
// console.log(wordBlanks("bike", "slow" , "flew", "slowly"))


var ourArray= ["John", 23]; //meaning that john is always 23 whenever you call this array
// console.log(ourArray);
var myArray= ["Quincy", 1 ]; //meaning that quincy is always 1 unless otherwise changed
//console.log(myArray);

var ourArray= [["the universe", 42], ["everything", 101010]];
//console.log(ourArray);

var myArray= [["Bulls", 23], ["White sox", 45]];
// console.log(myArray);
// console.log(myArray[0], myArray[1]); //This shows the elements of the two arrays as they are

var ourArray= [50,60,70];
var ourData= ourArray[0];
//console.log(ourData); 

var myData= ourArray[2];
//console.log(myData);

var ourArray= [18, 64, 99];
ourArray[1]= 53;
//console.log(ourArray)

ourArray[0]= 50;
//console.log(ourArray);

var myArray=[[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData = myArray[0][0];
// console.log(myData);

var myDataAgain=myArray[2][1];
// console.log(myDataAgain);

var myData2= myArray[3][0][2]; // triple bracket notation
// console.log(myData2);

var ourArray= ["Stimpson", "J", "cat"];
ourArray.push("Attorney", "General");
// console.log(ourArray);

var ourArray= ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// console.log(ourArray);
// console.log(ourArray[0],ourArray[1], ourArray[2], ourArray[3]);

var myArray= [["John", 23], ["cat", 2]];
myArray.push(["Dog", 3]);
// console.log(myArray);

var ourArray= [1,2,3];
var removedFromOurArray= ourArray.pop();// 3 is removed
// console.log(ourArray);

var myArray= [["John", 23], ["cat",2]];
var removedFromMyArray= myArray.pop();//removes the last element and holds it
//console.log(myArray);//prints the remaining after removing the last element

var myArray= [["John", 23], ["cat",2]];
var removedFromMyArray= myArray.pop();//removes the last element and holds it
//console.log(myArray[0]);//prints the remaining after removing the last element

var myArray= [["John", 23], ["cat",2]];
var removedFromMyArray= myArray.pop();//removes the last element and holds it
//console.log(removedFromMyArray);//removes what was printed

var ourArray= ["Stimpson", "J", "cat"];
var removedFromOurArray= ourArray.shift();//removes the first element and holds it
//console.log(ourArray);//prints the remaining after removing the first element

var myArray=[["John", 23], ["Dog", 3]];
var removedFromMyArray= myArray.shift();//removes the first element and holds it
//console.log(myArray);//prints the remaining after removing the first element

var myArray=[["John", 23], ["Dog", 3]];
var removedFromMyArray= myArray.shift();//removes the first element and holds it
//console.log(myArray[0]);//prints the remaining after removing the first element

var myColours= ["Pink", "Yellow", "Red"];
var myBestColourAdded= myColours.unshift("Blue");//Adds this element to the beginning of the array
console.log (myColours);

var ourArray= ["Stimpson", "J", "cat"];
ourArray.shift();//removes the first element in the array, therefore becomes ["J","cat"]
console.log(ourArray.unshift("Happy"));

var ourArray= ["Stimpson", "J", "cat"];
ourArray.shift();//removes the first element in the array, therefore becomes ["J","cat"]
var newArray=ourArray.unshift("Happy")
console.log(ourArray);




