//================================================================================
//Variables
//================================================================================
var hourOfTheDay = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"]
var rowNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var currentTime = moment().format('MMMM Do YYYY, h:mm a');
var currentHour = JSON.parse(moment().format("H"));

//================================================================================
//Building the presentation of the calendar 
//================================================================================

// Using a for loop
for (let myHour = 8; myHour < 19; myHour++) {
    // loop over my array of hours and create a div for row, create div for hours, textarea, and a button, and give these ares content
    let rowMaker = $("<div class=\"row time-block\">"); //row maker is creating rows that hours, text areas, and buttons go into
    let hourMaker //hour maker is creating the hour block
        //the if loop is necessary to style the hours into 12 hour format
        if (myHour <= 12) {
            hourMaker = $("<div class=\"col-md-1 hour\">" + myHour + "</div>");
        } else {
            hourMaker = $("<div class=\"col-md-1 hour\">" + (myHour - 12) + "</div>");
        }

    let commentMaker = $("<textarea class=\"col-md-10 textarea\">"); //builds the text areas
        if (currentHour > myHour) {
            commentMaker.addClass('past');
        } else if (currentHour == myHour) {
            commentMaker.addClass('present');
        } else {
            commentMaker.addClass('future');
        }

    let buttonMaker = $("<button class=\"col-md-1 saveBtn\">") //builds the buttons
    rowMaker.attr('id', 'myrow-' + myHour); //assigning ID's to each row with a variable
    commentMaker.attr('name', 'commentrow-' + myHour); //assigning ID's to each comment row
    commentMaker.text(localStorage.getItem('hour-' + myHour)); //pulling the saved comments from local storage
    buttonMaker.text("save") //putting the text on the button
    buttonMaker.attr('name', 'hour-' + myHour); //assigning unique attributes to each button
    rowMaker.append(hourMaker, commentMaker, buttonMaker) //putting the hour, text area, and button into the encapsulating div
    // $(".container").append(rowMaker); appending each row to the container element
    function clicked() {}
    buttonMaker.click(clicked)
}

$("#currentDay").addClass("time-block");
$("#currentDay").append(currentTime);

//================================================================================
//       ||INACTIVE||Retaining the psuedo code
//================================================================================

//TODO: Show time on top of calendar, using moment.js grab the time, and append it to the p id currentDay

//TODO: how can I compare the hours of my rows, to the current time (use moment.js to get the current time and compare to the time that is being assigned to the row)

//TODO:Give the elements the classes that they need. Using an if statement we can check using moment.js to see if the hour that we are looping over is past the current hour, if so give the text area the class of past

//TODO: Create a click event listener for the buttons

//TODO: Grab the value of the text area and save it to a variable (I need to be able to save the text from the text area that is in the same row as my button)

//TODO: using localStorage.setItem save the text to local storage

//TODO: Retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (how can I know what text from local storage goes to what text area?)
