//Using the following variables:

//var goodDrivingRecord = true;
//var age = 24;

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// If the user either has a good record or is over 25 years old, they should pay full price
// If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

var goodDrivingRecord = false;
var age = 19;

if (goodDrivingRecord === true && age > 25) {
    console.log("The customer is eligible to rent at a discount!")
} else if (goodDrivingRecord === true || age > 25) {
    console.log("The customer is eligible to rent at normal price")
} else {
    console.log("The customer requires a co-signer to rent")
};


// link to video https://www.loom.com/share/ca842c1c52c54b509722d5bb3d4c4d35?sid=d88c8f27-ceba-44ae-881a-ca5867321160