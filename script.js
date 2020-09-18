//================================================================================
//Variables
//================================================================================
var hourOfTheDay = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"]
var rowNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var currentTime = moment().format('MMMM Do YYYY, h:mm a');
var currentHour = moment().format("k")
var rowStyle = "";


//================================================================================
//Building the presentation of the calendar 
//================================================================================






// Using a for loop
for (let i = 0; i < hourOfTheDay.length; i++) {
    if (currentHour >= 13 && currentHour <= 24) {
        currentHour = currentHour - 12;
        console.log("Current hour after if statement is ", currentHour)
    }
// loop over my array of hours and create a div for row, create div for hours, textarea, and a button, and give these ares content
    let rowMaker = $("<div class=\"row time-block\">");
    let hourMaker =$("<div class=\"col-md-2 hour\">" + hourOfTheDay[i] + "</div>");
    if (currentHour < hourOfTheDay[i]) {
        rowStyle = " past";
    } else if (currentHour === hourOfTheDay[i]) {
        rowStyle = " present";
    } else {
        rowStyle = " future";
    }
    console.log("Rowstyle = ", rowStyle)
    
    let commentMaker = $("<textarea class=\"col-md-8 textarea JSON.stringify(rowStyle)\">");
    let buttonMaker = $("<button class=\"col-md-2 saveBtn\">")
    rowMaker.attr('id', 'myrow-' + i);
    commentMaker.text("")
    buttonMaker.text("save")
    // hourMaker.text(hourOfTheDay[i]);
    $(".container").append(rowMaker)
    rowMaker.append(hourMaker, commentMaker, buttonMaker)

    

    

}

// console.log(moment().format());

//TODO: Show time on top of calendar, using moment.js grab the time, and append it to the p id currentDay


$("#currentDay").addClass("time-block");
$("#currentDay").append(currentTime);



//TODO: how can I compare the hours of my rows, to the current time (use moment.js to get the current time and compare to the time that is being assigned to the row)


console.log("this is the current hour", currentHour);

for (let j = 0; j < hourOfTheDay.length; j++) {
rowNum = $('#myrow-' + j);
console.log(rowNum);
    
}

//TODO:Give the elements the classes that they need. Using an if statement we can check using moment.js to see if the hour that we are looping over is past the current hour, if so give the text area the class of past

//TODO: Create a click event listener for the buttons
document.querySelector(".container").addEventListener("click", function(event) {
    if(event.target.matches("button")){
        console.log("You clicked a button");
    }
    
})
    

//TODO: Grab the value of the text area and save it to a variable (I need to be able to save the text from the text area that is in the same row as my button)



//TODO: using localStorage.setItem save the text to local storage

localStorage.setItem("test", "my notes 1") //first value is the key, second is the value
localStorage.setItem("test1", "my notes 2")

//TODO: Retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (how can I know what text from local storage goes to what text area?)


var text1FromLocalStorage= localStorage.getItem("test") //getting the text test using the assigned key from earlier
$(".first").text(text1FromLocalStorage) //.first is the id for what we are trying to get the text from





