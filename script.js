//================================================================================
//Variables
//================================================================================
var container = $("container")
var hourOfTheDay = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"]
var rowNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

console.log(moment().format("h a"))


//================================================================================
//Building the presentation of the calendar 
//================================================================================

//TODO: Create one row with time, text area, and button using JQ
// Here is the layout of what we need to make using jquery
{/* <div class="row time-block">
    <div class="col-md-2 hour">9:00 AM</div>
    <textarea class="col-md-8 textarea"></textarea>
    <button class="col-md-2 saveBtn">Save</button>
</div> */}

for (let i = 0; i < hourOfTheDay.length; i++) {

    let rowMaker = $("<div class=\"row time-block\">");
    let hourMaker =$("<div class=\"col-md-2 hour\">" + hourOfTheDay[i] + "</div>");
    let commentMaker = $("<textarea class=\"col-md-8 textarea\">")
    let buttonMaker = $("<button class=\"col-md-2 saveBtn\">")
    rowMaker.attr('id', 'myrow-' + i);
    commentMaker.text("Enter text here")
    buttonMaker.text("save")
    // hourMaker.text(hourOfTheDay[i]);
    $(".container").append(rowMaker)
    rowMaker.append(hourMaker, commentMaker, buttonMaker)

//     rowCreation();
//     inputFieldCreation();

// function rowCreation() {
//     var RowMaker = $("<div>");
//     RowMaker.addClass("row time-block");
//     RowMaker.attr("id", hourOfTheDay[i]);
//     RowMaker.text(hourOfTheDay[i]);
//     RowMaker.attr('id', 'myrow-' + i);
//     $(".container").append(RowMaker);
// }

// function inputFieldCreation() {
//     var commentMaker = $("<div>")
//     commentMaker.addClass("col-md-8 textarea");
//     commentMaker.text("Click to add an event")
//     $(".time-block").append(commentMaker);
// }


    
    //adding the hour to the div
    
    
    //adding the text block
    // var hour = $("<INPUT>");
    // hour.addClass("row");
    // hour.attr("data-number", hourOfTheDay[i]); //keep these on the input field and textbox
    // hour.text(hourOfTheDay[i]);
    // hour.attr('id', 'myrow-' + i);
    // $("#" + hourOfTheDay[i]).append(hour);
}

// console.log(moment().format());

//TODO: Show time on top of calendar, using moment.js grab the time, and append it to the p id currentDay

//TODO: create an array to hold the hours of the day that I need

//TODO: Using a for loop

//TODO: loop over my array of hours and create a div for row, create div for hours, textarea, and a button

//TODO: give the elements some content

//TODO: how can I compare the hours of my rows, to the current time (use moment.js to get the current time and compare to the time that is being assigned to the row)

//TODO:Give the elements the classes that they need. Using an if statement we can check using moment.js to see if the hour that we are looping over is past the current hour, if so give the text area the class of past

//TODO: Create a click event listener for the buttons

//TODO: Grab the value of the text area and save it to a variable (I need to be able to save the text from the text area that is in the same row as my button)

//TODO: using localStorage.setItem save the text to local storage

//TODO: Retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (how can I know what text from local storage goes to what text area?)
localStorage.setItem("test", "my notes 1") //first value is the key, second is the value
localStorage.setItem("test1", "my notes 2")

var text1FromLocalStorage= localStorage.getItem("test") //getting the text test using the assigned key from earlier
$(".first").text(text1FromLocalStorage) //.first is the id for what we are trying to get the text from




// for (let i = 0; i < hourOfTheDay.length; i++) {
//     //adding the hour to the div
//     var hour = $("<div>");
//     hour.addClass("row");
//     hour.attr("id", hourOfTheDay[i]);
//     hour.text(hourOfTheDay[i]);
//     // hour.attr('id', 'myrow-' + i);
//     $("#planner").append(hour);
//     //adding the text block
//     var hour = $("<INPUT>");
//     hour.addClass("row");
//     hour.attr("data-number", hourOfTheDay[i]); //keep these on the input field and textbox
//     hour.text(hourOfTheDay[i]);
//     hour.attr('id', 'myrow-' + i);
//     $("#" + hourOfTheDay[i]).append(hour);
// }

// console.log(moment().format());




// for (let i = 0; i < rowNumber.length; i++) {
// var inputField = $("INPUT");
// inputField.addClass(textarea)
// inputField.attr("INPUT")
// $("myrow-[i]").append(inputField)
// }



//================================================================================
//Content that goes inside the calendar
//================================================================================

    //TODO: Include the time in each block

    //TODO: Include an input field in each block


//================================================================================
//Saving the input from the calendar
//================================================================================

        //TODO: Save the input from each block to memory

    //TODO: Include a button for each block that will save the input from that block to memory, and that the memory persists after refresh is clicked

//================================================================================
//Connecting the calendar to a time and date finder
//================================================================================

//TODO: Connect a time and date finder to the code

//================================================================================
//Styling the date blocks
//================================================================================

    //TODO: Have the time and date finder style the hour blocks correctly

        //TODO: Style past blocks in grey

        //TODO: Style current block in red

        //TODO: Style future blocks in green
