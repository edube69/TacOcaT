// Get the string from the page
// controler function
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    // get the user string from the page
    let userString = document.getElementById("userString").value;
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");
    
    //check for palindrome
    let returnObj = {};
    returnObj = checkForPalindrome(userString);

    //display result
    displayString(userString, returnObj);
}

// reverse the string
// logic function
function reverseString(userString){
    let revString = [];
    // The last position in an array is length - 1
    for(i = userString.length - 1 ; i >= 0 ; i--){
        revString += userString[i];
    }
    return revString;
}

function checkForPalindrome(userString)
{
    //reverse the user string
    let revString = reverseString(userString);

    let returnObj = {};

    if (userString == revString) {
        returnObj.msgHead = "Well done! You entered a palindrome!";
    }else{
        returnObj.msgHead = "Sorry! You did not enter a palindrome!";
    }

    returnObj.reversed = revString;

    return returnObj;

}

// display the reverse string to the user
// view function
function displayString(userString, returnObj){
    // Write to the page
    document.getElementById("msgHead").innerHTML = returnObj.msgHead    
    document.getElementById("msg").innerHTML = `Your string reversed is : ${returnObj.reversed}`; 
    
    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}
